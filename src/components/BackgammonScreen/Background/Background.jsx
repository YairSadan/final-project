'use client';
import React from 'react';
import Board from './Board/Board';
class BackgammonPiece {
  constructor(c, x, y, radius, color) {
    this.c = c;
    this.x = x;
    this.y = y;
    this.color = color;
    this.radius = radius;
  }

  draw() {
    this.c.beginPath();
    this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.c.fillStyle = this.color;
    this.c.fill();
    this.c.strokeStyle = this.color === 'white' ? 'black' : 'white';
    this.c.lineWidth = 3;
    this.c.stroke();
    this.c.closePath();
  }
}
class BackgammonTriangle {
  constructor(c, triangleNumber, boardWidth, boardHeight) {
    this.c = c;
    this.triangleNumber = triangleNumber;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = triangleNumber < 12 ? 'down' : 'up';
    this.triangleWidth = this.boardWidth / 12 - this.boardWidth / 12 / 12;
    this.yTop = this.direction === 'down' ? 0 : this.boardHeight - this.boardHeight / 3;
    this.yBottom = this.direction === 'down' ? this.boardHeight / 3 : this.boardHeight;
    const gapWidth = this.boardWidth / 12;
    if ((triangleNumber >= 6 && triangleNumber < 12) || triangleNumber >= 18) {
      this.xStart = (triangleNumber % 12) * this.triangleWidth + gapWidth;
    } else {
      this.xStart = (triangleNumber % 12) * this.triangleWidth;
    }
    if (triangleNumber >= 12) {
      this.fillColor = triangleNumber % 2 === 0 ? 'black' : 'brown';
    } else {
      this.fillColor = triangleNumber % 2 !== 0 ? 'black' : 'brown';
    }
    this.pieces = [];
  }

  addPiece(color) {
    const pieceX = this.xStart + this.triangleWidth / 2;
    let pieceY = 0;
    const radius = this.triangleWidth / 5;
    if (this.pieces.length === 0) {
      pieceY = this.direction === 'down' ? this.yTop + radius : this.yBottom - radius;
    } else {
      pieceY =
        this.direction === 'down'
          ? this.yTop + this.pieces.length * radius * 2 + radius
          : this.yBottom - this.pieces.length * radius * 2 - radius;
    }
    const piece = new BackgammonPiece(this.c, pieceX, pieceY, radius, color);
    this.pieces.push(piece);
    piece.draw();
  }

  draw() {
    this.c.beginPath();
    this.c.moveTo(this.xStart, this.direction === 'down' ? this.yTop : this.yBottom);
    this.c.lineTo(
      this.xStart + this.triangleWidth,
      this.direction === 'down' ? this.yTop : this.yBottom
    );
    this.c.lineTo(
      this.xStart + this.triangleWidth / 2,
      this.direction === 'down' ? this.yBottom : this.yTop
    );
    this.c.closePath();
    this.c.fillStyle = this.fillColor;
    this.c.fill();
  }
}

class BackgammonBoard {
  constructor(c) {
    this.c = c;
    this.boardWidth = window.innerWidth;
    this.boardHeight = window.innerHeight;
    this.triangles = Array.from(
      { length: 24 },
      (_, i) => new BackgammonTriangle(this.c, i, this.boardWidth, this.boardHeight)
    );
  }
  draw() {
    for (const triangle of this.triangles) {
      triangle.draw();
    }
    const rectangleStart = this.boardWidth / 2 - this.boardWidth / 24;
    const rectangleWidth = this.boardWidth / 12;
    this.c.fillStyle = 'gray';
    this.c.fillRect(rectangleStart, 0, rectangleWidth, this.boardHeight);
  }
}
function initialBoard(board) {
  board.triangles[0].addPiece('white');
  board.triangles[0].addPiece('white');
  board.triangles[11].addPiece('white');
  board.triangles[11].addPiece('white');
  board.triangles[11].addPiece('white');
  board.triangles[11].addPiece('white');
  board.triangles[11].addPiece('white');
  board.triangles[17].addPiece('white');
  board.triangles[17].addPiece('white');
  board.triangles[17].addPiece('white');
  board.triangles[17].addPiece('white');
  board.triangles[17].addPiece('white');
  board.triangles[19].addPiece('white');
  board.triangles[19].addPiece('white');
  board.triangles[19].addPiece('white');

  board.triangles[5].addPiece('black');
  board.triangles[5].addPiece('black');
  board.triangles[5].addPiece('black');
  board.triangles[5].addPiece('black');
  board.triangles[5].addPiece('black');
  board.triangles[7].addPiece('black');
  board.triangles[7].addPiece('black');
  board.triangles[7].addPiece('black');
  board.triangles[12].addPiece('black');
  board.triangles[12].addPiece('black');
  board.triangles[23].addPiece('black');
  board.triangles[23].addPiece('black');
  board.triangles[23].addPiece('black');
  board.triangles[23].addPiece('black');
  board.triangles[23].addPiece('black');
 }

const Background = () => {
  const draw = (c) => {
    const board = new BackgammonBoard(c);
    board.draw();
    initialBoard(board);
  };
  return (
    <>
      <Board draw={draw} />
    </>
  );
};
export default Background;
