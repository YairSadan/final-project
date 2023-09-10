
export default class BackgammonDiceRollButton {
  constructor(c, boardWidth, boardHeight) {
    this.c = c;
    this.w = boardWidth / 12;
    this.h = boardHeight / 15;
    this.x = boardWidth / 4 - this.w / 2;
    this.y = boardHeight / 2 - this.h / 2;
  }
  draw() {
    this.c.fillStyle = 'green';
    this.c.fillRect(this.x, this.y, this.w, this.h);
    this.c.fillStyle = 'black';
    this.c.font = '20px Arial';
    this.c.fillText('Roll Dice', this.x + 5, this.y + this.h / 2, this.w);
  }
  isClicked(e) {
    if (
      e.clientX > this.x &&
      e.clientX < this.x + this.w &&
      e.clientY > this.y &&
      e.clientY < this.y + this.h
    ) {
      return true;
    }
    return false;
  }
}
