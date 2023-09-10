'use client';
import React, { useEffect, useRef } from 'react';
import Board from './Board/Board';
import { BackgammonManager } from '@/classes/BackgammonManager';

const Background = ({ gameData }) => {
  const managerRef = useRef(null);
  useEffect(() => {
    if (!managerRef.current) managerRef.current = new BackgammonManager(gameData);
    else managerRef.current.updateGameData(gameData);
  }, [gameData]);
  return (
    <>
      <Board boardState={managerRef.current.board} gameManager={ managerRef.current} />
    </>
  );
};
export default Background;
