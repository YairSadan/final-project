import getCurrentUser from '@/actions/getCurrentUser';
import { pusherServer } from '@/lib/pusher';
import { NextResponse } from 'next/server';
import prisma from '@/lib/prismadb';

export async function POST(request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();
    const { userId } = body;

    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse('Unauthorized', { status: 400 });
    }
    const newGame = await prisma.game.create({
      data: {
        users: {
          connect: [
            {
              id: currentUser.id,
            },
            {
              id: userId,
            },
          ],
        },
        isOver: false,
        isMultiplayer: true,
        boardState: {
          create: {},
        },
      },
      include: {
        users: true,
      },
    });
    console.log(userId)
    pusherServer.trigger(userId, 'game-request', newGame);
    return NextResponse.json(newGame);
  } catch (error) {
    return new NextResponse('An error occured while trying to create a game', { status: 500 });
  }
}
