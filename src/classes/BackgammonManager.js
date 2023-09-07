'use client';
import BackgammonBoard from './BackgammonBoard';

export class BackgammonManager {
  constructor(c, gameData) {
    // this.board = new BackgammonBoard(gameData.board);
  }
  initiateDrawing(ctx) {
    this.ctx;
    this.board = new BackgammonBoard(ctx);
    this.board.draw();
    this.board.initialBoard();
    this.firstTurn = true;
    this.gameOver = false;
    this.player1 = {};
  }
  handleClick(event) {
    if (!this.gameOver) {
      if (this.firstTurn && this.board.diceButton.isClicked(event)) {
        this.handleFirstTurn();
      } else if (!this.firstTurn && !this.gameOver) {
        this.board.handleClick(event);
      }
    }
  }
  handleFirstTurn() {
    const aiDie = Math.floor(Math.random() * 6) + 1;
    const playerDie = Math.floor(Math.random() * 6) + 1;
    this.board.dice[0].drawDice(playerDie);
    setTimeout(() => {
      this.board.dice[1].drawDice(aiDie);
      setTimeout(() => {
        if (playerDie > aiDie) {
          window.alert('You go first!');
          this.firstTurn = false;
        } else if (aiDie > playerDie) {
          window.alert('AI goes first!');
          this.firstTurn = false;
        } else {
          window.alert('Tie! Roll again!');
        }
      }, 500);
    }, 1000);
  }
}
