'use client'
import BackgammonBoard from '@/classes/BackgammonBoard';
import { BackgammonManager } from '@/classes/BackgammonManager';
import { useEffect, useRef } from 'react';
export interface BoardProps {
  boardState: BackgammonBoard;
  gameManager: BackgammonManager;
}
const Board = ({boardState, gameManager}: BoardProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const current = canvasRef.current;
    const context = current?.getContext('2d');
    if (context) {
      context.canvas.width = window.innerWidth;
      context.canvas.height = window.innerHeight;
      if (!boardState) gameManager.boardState = new BackgammonBoard(context);
      else boardState.updateGameData(boardState);
    }
  }, [gameManager, boardState]);
  return (
    <div className='h-screen w-screen'>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Board;
