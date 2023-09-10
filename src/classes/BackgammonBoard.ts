'use client';
import BackgammonDice from './BackgammonDice';
import BackgammonDiceRollButton from './BackgammonDiceRollButton';
import BackgammonTriangle from './BackgammonTriangle';

export default class BackgammonBoard {
  private c: any;
  private boardWidth: number;
  private boardHeight: number;
  private triangles: BackgammonTriangle[];
  private diceButton: BackgammonDiceRollButton;
  private dice: BackgammonDice[];

  constructor(c: any) {
    this.c = c;
    this.boardWidth = window.innerWidth;
    this.boardHeight = window.innerHeight;
    this.triangles = new Array(24).fill(0).map((_, i) => new BackgammonTriangle(this.c, this.boardWidth, this.boardHeight, i + 1));
    this.diceButton = new BackgammonDiceRollButton(this.c, this.boardWidth, this.boardHeight);
    this.dice = Array.from(
      { length: 4 },
      (_, i) => new BackgammonDice(this.c, this.boardWidth, this.boardHeight, i + 1)
    );
    this.draw();
  }

  private draw() {
    for (const triangle of this.triangles) {
      triangle.draw();
    }
    this.diceButton.draw();
    const rectangleStart = this.boardWidth / 2 - this.boardWidth / 24;
    const rectangleWidth = this.boardWidth / 12;
    this.c.fillStyle = 'gray';
    this.c.fillRect(rectangleStart, 0, rectangleWidth, this.boardHeight);
  }

  public handleClick(event: any) {
    if (this.diceButton.isClicked(event)) {
      const number1 = Math.floor(Math.random() * 6) + 1;
      const number2 = Math.floor(Math.random() * 6) + 1;
      this.dice.forEach((die) => die.clean());
      if (number1 === number2) this.dice.forEach((die) => die.drawDice(number1));
      else {
        this.dice[0].drawDice(number1);
        this.dice[1].drawDice(number2);
      }
    }
  }
}
