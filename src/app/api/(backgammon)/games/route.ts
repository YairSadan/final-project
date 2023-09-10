import getCurrentUser from '@/actions/getCurrentUser';
import { pusherServer } from '@/lib/pusher';
import { NextResponse } from 'next/server';
import prisma from '@/lib/prismadb';
import { pieceColor } from '@prisma/client';

export async function POST(request : Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();
    const { otherUserId } = body;
    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse('Unauthorized', { status: 400 });
    }
    const newGame = await prisma.game.create({
      data: {
        users: {
          connect: [{ id: currentUser.id }, { id: otherUserId }],
        },
        isOver: false,
        isMultiplayer: true,
      },
    });
    const board = await prisma.board.create({
      data: {
        gameId: newGame.id,
      },
    });
    const initialPositions = [
      { point: 23, color: pieceColor.WHITE, count: 2 },
      { point: 12, color: pieceColor.WHITE, count: 5 },
      { point: 7, color: pieceColor.WHITE, count: 3 },
      { point: 5, color: pieceColor.WHITE, count: 5 },
      { point: 0, color:  pieceColor.BLACK, count: 2 },
      { point: 11, color: pieceColor.BLACK, count: 5 },
      { point: 16, color: pieceColor.BLACK, count: 3 },
      { point: 18, color: pieceColor.BLACK, count: 5 },
    ];
    for (let i = 0; i < 24; i++) {
      const position = initialPositions.find((pos) => pos.point === i);

      const triangle = await prisma.triangle.create({
        data: {
          number: i,
          boardId: board.id,
        },
      });

      if (position) {
        for (let j = 0; j < position.count; j++) {
          await prisma.piece.create({
            data: {
              color: position.color,
              state: 'ON_BOARD',
              triangleId: triangle.id,
            },
          });
        }
      }
    }

    pusherServer.trigger(otherUserId, 'game-request', {
      gameRoomId: newGame.id,
      requesterName: currentUser.username,
    });
    return NextResponse.json(newGame.id);
  } catch (error) {
    return new NextResponse('An error occured while trying to create a game', { status: 500 });
  }
}
