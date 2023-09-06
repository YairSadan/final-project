import BackgammonBoard from './BackgammonBoard';

export class BackgammonManager {
  constructor(c) {
    this.c = c;
    this.board = new BackgammonBoard(c);
    this.board.draw();
    this.board.initialBoard();
    this.firstTurn = true;
  }
    handleClick(event) { 
        if (this.firstTurn && this.board.diceButton.isClicked(event)) {
            this.board.dice[0].drawDice(6);
        }
    }
}
