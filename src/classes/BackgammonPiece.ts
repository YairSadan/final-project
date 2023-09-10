
export default class BackgammonPiece {
  private ctx: CanvasRenderingContext2D;
  private x: number;
  private y: number;
  private radius: number;
  private owner: string;
  private color: string;

  constructor(ctx: CanvasRenderingContext2D, triangleX: number, triangleWidth: number, triangleDirection: string, i: number, yTop: number, yBottom: number, owner: number) {
    this.ctx = ctx;
    this.x = triangleX + triangleWidth / 2;
    this.radius = triangleWidth / 5;
    this.y = this.calculateY(i, triangleDirection, yTop, yBottom);
    this.owner = owner === 1 ? 'player1' : 'player2';
    this.color = this.owner === 'player1' ? 'white' : 'black';
  }

  private calculateY(i: number, triangleDirection: string, yTop: number, yBottom: number) {
    if (i === 0) {
      return triangleDirection === 'down' ? yTop + this.radius : yBottom - this.radius;
    }
    return triangleDirection === 'down' ? yTop + i * this.radius * 2 + this.radius : yBottom - i * this.radius * 2 - this.radius;
  }

  public draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.strokeStyle = this.color === 'white' ? 'black' : 'white';
    this.ctx.lineWidth = 3;
    this.ctx.stroke();
    this.ctx.closePath();
  }

  public isClicked(e: any) {
    const distance = Math.sqrt((e.clientX - this.x) ** 2 + (e.clientY - this.y) ** 2);
    return distance < this.radius;
  }
}