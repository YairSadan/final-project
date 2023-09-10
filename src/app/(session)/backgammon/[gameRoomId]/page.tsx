import getGameById from '@/actions/getGameById';
import Background from '@/components/BackgammonScreen/Background/Background';
import React from 'react';
interface IParams {
  gameRoomId: string;
}
const Backgammon = async ({ params } : {params: IParams}) => {
  const { gameRoomId } = params;
  const gameData = await getGameById(gameRoomId);
  return <Background gameData={gameData} />
};

export default Backgammon;
