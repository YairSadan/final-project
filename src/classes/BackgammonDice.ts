export default class BackgammonDice {
  private diceNumber: number;
  private c: CanvasRenderingContext2D;
  private w: number;
  private h: number;
  private x: number;
  private y: number;
  private radius: number;
  private strokeWidth: number;

  constructor(c: CanvasRenderingContext2D, boardWidth: number, boardHeight: number, diceNumber: number) {
    this.diceNumber = diceNumber;
    this.c = c;
    this.w = boardWidth / 15;
    this.h = boardWidth / 15;
    this.y = boardHeight / 2 - this.h / 2;
    const gap = this.w * 0.5;
    this.x = boardWidth - (this.w + gap) * this.diceNumber + gap / 2;
    this.radius = boardHeight / 70;
    this.strokeWidth = this.w / 30;
  }

  private drawCircle(x: number, y: number): void {
    this.c.beginPath();
    this.c.arc(x, y, this.radius, 0, Math.PI * 2, false);
    this.c.fillStyle = 'black';
    this.c.fill();
    this.c.closePath();
  }

  public drawDice(number: number): void {
    this.c.fillStyle = 'white';
    this.c.fillRect(this.x, this.y, this.w, this.h);
    this.c.strokeStyle = 'black';
    this.c.lineWidth = this.strokeWidth;
    this.c.strokeRect(this.x, this.y, this.w, this.h);

    switch (number) {
      case 1:
        this.drawCircle(this.x + this.w / 2, this.y + this.h / 2);
        break;
      case 2:
        this.drawCircle(this.x + this.w / 4, this.y + this.h / 4);
        this.drawCircle(this.x + (3 * this.w) / 4, this.y + (3 * this.h) / 4);
        break;
      case 3:
        this.drawCircle(this.x + this.w / 4, this.y + this.h / 4);
        this.drawCircle(this.x + this.w / 2, this.y + this.h / 2);
        this.drawCircle(this.x + (3 * this.w) / 4, this.y + (3 * this.h) / 4);
        break;
      case 4:
        this.drawCircle(this.x + this.w / 4, this.y + this.h / 4);
        this.drawCircle(this.x + (3 * this.w) / 4, this.y + this.h / 4);
        this.drawCircle(this.x + this.w / 4, this.y + (3 * this.h) / 4);
        this.drawCircle(this.x + (3 * this.w) / 4, this.y + (3 * this.h) / 4);
        break;
      case 5:
        this.drawCircle(this.x + this.w / 4, this.y + this.h / 4);
        this.drawCircle(this.x + (3 * this.w) / 4, this.y + this.h / 4);
        this.drawCircle(this.x + this.w / 2, this.y + this.h / 2);
        this.drawCircle(this.x + this.w / 4, this.y + (3 * this.h) / 4);
        this.drawCircle(this.x + (3 * this.w) / 4, this.y + (3 * this.h) / 4);
        break;
      case 6:
        this.drawCircle(this.x + this.w / 4, this.y + this.h / 4);
        this.drawCircle(this.x + (3 * this.w) / 4, this.y + this.h / 4);
        this.drawCircle(this.x + this.w / 4, this.y + this.h / 2);
        this.drawCircle(this.x + (3 * this.w) / 4, this.y + this.h / 2);
        this.drawCircle(this.x + this.w / 4, this.y + (3 * this.h) / 4);
        this.drawCircle(this.x + (3 * this.w) / 4, this.y + (3 * this.h) / 4);
        break;
      default:
        break;
    }
  }

  public clean(): void {
    this.c.clearRect(
      this.x - this.strokeWidth,
      this.y - this.strokeWidth,
      this.w + 2 * this.strokeWidth,
      this.h + 2 * this.strokeWidth
    );
  }
}