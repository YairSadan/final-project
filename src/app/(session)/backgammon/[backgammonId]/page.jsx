import getGameById from '@/actions/getGameById';
import Background from '@/components/BackgammonScreen/Background/Background';
import React from 'react';

const Backgammon = ({ params }) => {
  const game = getGameById(params.backgammonId);
  
  return <Background/>
};

export default Backgammon;
