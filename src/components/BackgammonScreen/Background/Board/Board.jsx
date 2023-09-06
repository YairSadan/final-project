import { useEffect, useRef } from 'react';

const Board = ({ draw }) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const context = canvasRef.current.getContext('2d');
    draw(context);
  }, [draw]);
  return (
    <div>
      <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />
    </div>
  );
};

export default Board;
