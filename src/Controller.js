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

      if (result.strike === 3) {
        await this.checkRestartOrExit();
      }
    }
  }

  async checkRestartOrExit() {
    const restartOrExit = await this.view.promptRestartOrExit();

    if (Number(restartOrExit) === 1) {
      this.model = new BaseBallGameModel();
      await this.playGame();
    } else {
      this.isPlaying = false;
    }
  }
}

export default BaseBallGameController;
