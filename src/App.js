import BaseBallGameController from './Controller.js';

class App {
  constructor() {
    this.controller = new BaseBallGameController();
  }

  async play() {
    this.controller.startGame();
  }
}

export default App;

const app = new App();
app.play();
