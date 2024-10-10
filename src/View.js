import { Console } from '@woowacourse/mission-utils';
import { validateUserGuess } from './validator.js';

class BaseBallGameView {
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
      let hint = '';
      if (ball > 0) hint += `${ball}볼 `;
      if (strike > 0) hint += `${strike}스트라이크`;
      Console.print(hint.trim());
    }
  }
}

export default BaseBallGameView;
