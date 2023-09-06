import { BackgammonManager } from '@/classes/BackgammonManager';
import { useEffect, useRef } from 'react';

const Board = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const context = canvasRef.current.getContext('2d');
    const manager = new BackgammonManager(context);
    const handleClick = (e) => manager.handleClick(e);
    canvasRef.current.addEventListener('click',(e) =>  handleClick(e));
    return () => {
      canvasRef.current.removeEventListener('click', handleClick);
    };
  }, []);
  return (
    <div>
      <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />
    </div>
  );
};

export default Board;
