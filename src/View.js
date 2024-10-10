import { Console } from '@woowacourse/mission-utils';
import { validateUserGuess } from './validator.js';

class BaseBallGameView {
  async promptUserGuess() {
    const userInput = await Console.readLineAsync('숫자를 입력해주세요 : ');
    validateUserGuess(userInput);
    return userInput;
  }
}

export default BaseBallGameView;
