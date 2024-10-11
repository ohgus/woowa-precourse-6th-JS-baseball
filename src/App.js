import BaseBallGameController from './Controller.js';

class App {
  constructor() {
    this.controller = new BaseBallGameController();
  }

  async play() {
    await this.controller.startGame();
  }
}

export default App;

// const app = new App();
// app.play();
