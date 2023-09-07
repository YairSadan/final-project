'use client'
import BackgammonBoard from '@/classes/BackgammonBoard';
import { useEffect, useRef } from 'react';

const Board = ({boardState}) => {
  const canvasRef = useRef(null);
  const managerRef = useRef(null);
  useEffect(() => {
    const current = canvasRef.current;
    const context = current.getContext('2d');
    context.canvas.width = window.innerWidth
    context.canvas.height = window.innerHeight
    if (!managerRef.current) managerRef.current = new BackgammonBoard(context, boardState);
    else managerRef.current.updateGameData(boardState);

    const handleClick = (e) => managerRef.current.handleClick(e);
    current.addEventListener('click', (e) => handleClick(e));
    return () => {
      current.removeEventListener('click', handleClick);
    };
  }, [boardState]);
  return (
    <div className='h-screen w-screen'>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Board;
