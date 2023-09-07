import getGameById from '@/actions/getGameById';
import Board from '@/components/BackgammonScreen/Background/Board/Board';
import React from 'react';

const Backgammon = async ({ params }) => {
  const { gameRoomId } = params;
  const gameData = await getGameById(gameRoomId);
  console.log(gameData.boardState.triangles[0].pieces[0].color);
  const updateGameData =  { 

  }
  return <Board boardState={gameData.boardState} />
};

export default Backgammon;
