import { Random } from '@woowacourse/mission-utils';

class BaseBallGameModel {
  constructor() {
    this.targetNumber = this.generateTargetNumber();
  }

  generateTargetNumber() {
    const targetNumber = [];

    while (targetNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);

      if (!targetNumber.includes(number)) {
        targetNumber.push(number);
      }
    }

    return targetNumber;
  }

  checkUserGuess(userGuess) {
    const target = this.targetNumber;
    let strike = 0;
    let ball = 0;

    userGuess
      .split('')
      .map(Number)
      .forEach((number, index) => {
        if (target[index] === number) {
          strike++;
        } else if (target.includes(number)) {
          ball++;
        }
      });

    return { strike, ball };
  }
}

export default BaseBallGameModel;
