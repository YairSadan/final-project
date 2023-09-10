'use client';

import  BackgammonBoard  from './BackgammonBoard';

interface GameData {
  winner: any;
  isOver: boolean;
  isMultiplayer: boolean;
  turn: any;
  boardState: any;
  users: any;
}

export class BackgammonManager {
  private ctx: any;
  private winner: any;
  private isOver: boolean;
  private isMultiplayer: boolean;
  private turn: any;
  private board: BackgammonBoard;
  private users: any;
  private firstTurn?: boolean; // Assuming this property exists but was not initialized in the constructor
  private gameOver?: boolean;  // Assuming this property exists but was not initialized in the constructor

  constructor(ctx: any, gameData: GameData) {
    console.log(gameData);
    this.ctx = ctx;
    this.winner = gameData.winner;
    this.isOver = gameData.isOver;
    this.isMultiplayer = gameData.isMultiplayer;
    this.turn = gameData.turn;
    this.board = new BackgammonBoard(this.ctx, gameData.boardState);
    this.users = gameData.users;
  }

  handleClick(event: Event): void {
    if (!this.gameOver) {
      if (this.firstTurn && this.board.diceButton.isClicked(event)) {
        this.handleFirstTurn();
      } else if (!this.firstTurn && !this.gameOver) {
        this.board.handleClick(event);
      }
    }
  }

  updateGameData(gameData: GameData): void {
    console.log('updateGameData');
  }

  handleFirstTurn(): void {
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
