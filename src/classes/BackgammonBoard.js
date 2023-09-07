'use client';
import BackgammonDice from './BackgammonDice';
import BackgammonDiceRollButton from './BackgammonDiceRollButton';
import BackgammonTriangle from './BackgammonTriangle';

export default class BackgammonBoard {
  constructor(c, boardState) {
    this.c = c;
    this.boardWidth = window.innerWidth;
    this.boardHeight = window.innerHeight;
    this.triangles = boardState.triangles.map(
      (triangle) => new BackgammonTriangle(this.c, this.boardWidth, this.boardHeight, triangle)
    );
    this.diceButton = new BackgammonDiceRollButton(this.c, this.boardWidth, this.boardHeight);
    this.dice = Array.from(
      { length: 4 },
      (_, i) => new BackgammonDice(this.c, this.boardWidth, this.boardHeight, i + 1)
    );
    this.draw();
  }
  draw() {
    for (const triangle of this.triangles) {
      
      triangle.draw();
      for (const piece of triangle.pieces) {
        piece.draw();
      }
    }
    this.diceButton.draw();
    const rectangleStart = this.boardWidth / 2 - this.boardWidth / 24;
    const rectangleWidth = this.boardWidth / 12;
    this.c.fillStyle = 'gray';
    this.c.fillRect(rectangleStart, 0, rectangleWidth, this.boardHeight);
  }
  handleClick(event) {
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
  initialBoard() {
    this.triangles[0].addPiece('white');
    this.triangles[0].addPiece('white');
    this.triangles[11].addPiece('white');
    this.triangles[11].addPiece('white');
    this.triangles[11].addPiece('white');
    this.triangles[11].addPiece('white');
    this.triangles[11].addPiece('white');
    this.triangles[16].addPiece('white');
    this.triangles[16].addPiece('white');
    this.triangles[16].addPiece('white');
    this.triangles[18].addPiece('white');
    this.triangles[18].addPiece('white');
    this.triangles[18].addPiece('white');
    this.triangles[18].addPiece('white');
    this.triangles[18].addPiece('white');
    this.triangles[23].addPiece('black');
    this.triangles[23].addPiece('black');
    this.triangles[12].addPiece('black');
    this.triangles[12].addPiece('black');
    this.triangles[12].addPiece('black');
    this.triangles[12].addPiece('black');
    this.triangles[12].addPiece('black');
    this.triangles[7].addPiece('black');
    this.triangles[7].addPiece('black');
    this.triangles[7].addPiece('black');
    this.triangles[5].addPiece('black');
    this.triangles[5].addPiece('black');
    this.triangles[5].addPiece('black');
    this.triangles[5].addPiece('black');
    this.triangles[5].addPiece('black');
  }
}
