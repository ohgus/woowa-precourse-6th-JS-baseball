import { Console } from '@woowacourse/mission-utils';

class BaseBallGameView {
  async promptUserGuess() {
    const userInput = await Console.readLineAsync('숫자를 입력해주세요 : ');
    return userInput;
  }
}

export default BaseBallGameView;
