import { Console } from '@woowacourse/mission-utils';
import { validateUserGuess, validateRestartOrExit } from './validator.js';

class BaseBallGameView {
  printStartMessage() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  async promptUserGuess() {
    const userInput = await Console.readLineAsync('숫자를 입력해주세요 : ');
    validateUserGuess(userInput);
    return userInput;
  }

  displayResult(result) {
    const { strike, ball } = result;

    if (strike === 3) {
      Console.print('3스트라이크');
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    } else if (strike === 0 && ball === 0) {
      Console.print('낫싱');
    } else {
      Console.print(this.generateHint(ball, strike));
    }
  }

  generateHint(ball, strike) {
    let hint = '';
    if (ball > 0) hint += `${ball}볼 `;
    if (strike > 0) hint += `${strike}스트라이크`;
    return hint.trim();
  }

  async promptRestartOrExit() {
    const userInput = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
    );
    validateRestartOrExit(userInput);
    return userInput;
  }
}

export default BaseBallGameView;
