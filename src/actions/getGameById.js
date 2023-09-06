import prisma from '@/lib/prismadb';
import getCurrentUser from './getCurrentUser';

const getGameById = async (gameId) => {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser?.email) return null;
    const game = await prisma.game.findUnique({
      where: {
        id: gameId,
      },
      include: { users: true },
    });
    return game;
  } catch (error) {
    console.log('an error occured while trying to find a game');
    return null;
  }
};

export default getGameById;