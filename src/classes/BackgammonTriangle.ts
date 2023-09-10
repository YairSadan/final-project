'use client';
import BackgammonPiece from './BackgammonPiece';
class BackgammonTriangle {
  private c: CanvasRenderingContext2D;
  private triangleNumber: number;
  private boardWidth: number;
  private boardHeight: number;
  private direction: 'down' | 'up';
  private triangleWidth: number;
  private yTop: number;
  private yBottom: number;
  private xStart: number;
  private fillColor: string;
  private pieces: BackgammonPiece[];

  constructor(
    c: CanvasRenderingContext2D,
    boardWidth: number,
    boardHeight: number,
    triangleNumber: number
  ) {
    this.c = c;
    this.triangleNumber = triangleNumber;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = this.triangleNumber < 12 ? 'down' : 'up';
    this.triangleWidth = this.calculateTriangleWidth();
    this.yTop = this.calculateYTop();
    this.yBottom = this.calculateYBottom();
    this.xStart = this.calculateXStart();
    this.fillColor = this.calculateFillColor();
    this.pieces = this.initializePieces();
  }

  private calculateTriangleWidth(): number {
    return this.boardWidth / 12 - this.boardWidth / 12 / 12;
  }

  private calculateYTop(): number {
    return this.direction === 'down' ? 0 : this.boardHeight - this.boardHeight / 3;
  }

  private calculateYBottom(): number {
    return this.direction === 'down' ? this.boardHeight / 3 : this.boardHeight;
  }

  private calculateXStart(): number {
    const gapWidth = this.boardWidth / 12;
    const isGapTriangle =
      (this.triangleNumber >= 6 && this.triangleNumber < 12) || this.triangleNumber >= 18;
    const baseX = this.direction === 'down' ? this.boardWidth : 0;
    const xDelta = (this.triangleNumber % 12) * this.triangleWidth + (isGapTriangle ? gapWidth : 0);
    return this.direction === 'down' ? baseX - xDelta - this.triangleWidth : xDelta;
  }

  private calculateFillColor(): string {
    return this.triangleNumber % 2 === 0 ? 'brown' : 'black';
  }

  private initializePieces() {
    const pieces: BackgammonPiece[] = [];

    const addPieces = (triangleNumber: number, count: number, player: number) => {
      for (let i = 0; i < count; i++) {
        const piece = new BackgammonPiece(
          this.c,
          this.xStart + this.triangleWidth * (triangleNumber - 1),
          this.triangleWidth,
          this.direction,
          i,
          this.yTop,
          this.yBottom,
          player,
        );
        pieces.push(piece);
      }
    };
    addPieces(1, 2, 1);
    addPieces(6, 5, 2);
    addPieces(8, 3, 2);
    addPieces(12, 5, 1);
    addPieces(13, 5, 2);
    addPieces(17, 3, 1);
    addPieces(19, 5, 1);
    addPieces(24, 2, 2);
    return pieces;
  }

  public draw(): void {
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

  public isClicked(e: any): boolean {
    return (
      e.clientX > this.xStart &&
      e.clientX < this.xStart + this.triangleWidth &&
      e.clientY > this.yTop &&
      e.clientY < this.yBottom
    );
  }
}

export default BackgammonTriangle;
