import prisma from '@/lib/prismadb';
import getCurrentUser from './getCurrentUser';

const getGameById = async (gameRoomId) => {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser?.email) return null;
    const game = await prisma.game.findUnique({
      where: {
        id: gameRoomId,
      },
      include: {
        boardState: {
          include: {
            triangles: {
              select: {
                number: true,
                pieces: {
                  select: {
                    color: true,
                  },
                },
              }
            }
          },
        },
      },
    });
    return game;
  } catch (error) {
    console.log('an error occured while trying to find a game');
    return null;
  }
};

export default getGameById;
