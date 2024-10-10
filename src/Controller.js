import BaseBallGameModel from './Model.js';
import BaseBallGameView from './View.js';

class BaseBallGameController {
  constructor() {
    this.model = new BaseBallGameModel();
    this.view = new BaseBallGameView();
    this.isPlaying = true;
  }

  startGame() {
    this.view.printStartMessage();
    this.playGame();
  }

  async playGame() {
    while (this.isPlaying) {
      const userGuess = await this.view.promptUserGuess();
      const result = this.model.checkUserGuess(userGuess);
      this.view.displayResult(result);
    }
  }
}

export default BaseBallGameController;
