import BackgammonPiece from "./BackgammonPiece";

export default class BackgammonTriangle {
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
      const isGapTriangle = (triangleNumber >= 6 && triangleNumber < 12) || triangleNumber >= 18;
      const baseX = this.direction === 'down' ? this.boardWidth : 0;
      const xDelta = (triangleNumber % 12) * this.triangleWidth + (isGapTriangle ? gapWidth : 0);
      this.xStart = this.direction === 'down' ? baseX - xDelta - this.triangleWidth : xDelta;
      this.fillColor = triangleNumber % 2 === 0 ? 'brown' : 'black';
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
    isClicked(e) { 
        if (e.clientX > this.xStart && e.clientX < this.xStart + this.triangleWidth && e.clientY > this.yTop && e.clientY < this.yBottom) {
            return true;
        }
        return false;
    }
  }