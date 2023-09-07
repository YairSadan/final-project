'use client';
import BackgammonPiece from "./BackgammonPiece";

class BackgammonTriangle {
  constructor(c, boardWidth, boardHeight, triangle) {
    this.c = c;
    this.triangleNumber = triangle.number;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = this.triangleNumber < 12 ? 'down' : 'up';
    this.triangleWidth = this.calculateTriangleWidth();
    this.yTop = this.calculateYTop();
    this.yBottom = this.calculateYBottom();
    this.xStart = this.calculateXStart();
    this.fillColor = this.calculateFillColor();
    this.pieces = this.initializePieces(triangle.pieces);
  }

  calculateTriangleWidth() {
    return this.boardWidth / 12 - this.boardWidth / 12 / 12;
  }

  calculateYTop() {
    return this.direction === 'down' ? 0 : this.boardHeight - this.boardHeight / 3;
  }

  calculateYBottom() {
    return this.direction === 'down' ? this.boardHeight / 3 : this.boardHeight;
  }

  calculateXStart() {
    const gapWidth = this.boardWidth / 12;
    const isGapTriangle = (this.triangleNumber >= 6 && this.triangleNumber < 12) || this.triangleNumber >= 18;
    const baseX = this.direction === 'down' ? this.boardWidth : 0;
    const xDelta = (this.triangleNumber % 12) * this.triangleWidth + (isGapTriangle ? gapWidth : 0);
    return this.direction === 'down' ? baseX - xDelta - this.triangleWidth : xDelta;
  }

  calculateFillColor() {
    return this.triangleNumber % 2 === 0 ? 'brown' : 'black';
  }

  initializePieces(pieces) {
    return pieces.map((piece, i) => 
      new BackgammonPiece(this.c, this.xStart, this.triangleWidth, this.direction, piece, i, this.yTop, this.yBottom)
    );
  }

  draw() {
    this.c.beginPath();
    this.c.moveTo(this.xStart, this.direction === 'down' ? this.yTop : this.yBottom);
    this.c.lineTo(this.xStart + this.triangleWidth, this.direction === 'down' ? this.yTop : this.yBottom);
    this.c.lineTo(this.xStart + this.triangleWidth / 2, this.direction === 'down' ? this.yBottom : this.yTop);
    this.c.closePath();
    this.c.fillStyle = this.fillColor;
    this.c.fill();
  }

  isClicked(e) {
    return e.clientX > this.xStart && e.clientX < this.xStart + this.triangleWidth && e.clientY > this.yTop && e.clientY < this.yBottom;
  }
}

export default BackgammonTriangle;