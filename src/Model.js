import { MissionUtils } from '@woowacourse/mission-utils';

class BaseBallGameModel {
  constructor() {
    this.targetNumber = this.generateTargetNumber();
  }

  generateTargetNumber() {
    const targetNumber = [];

    while (targetNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!targetNumber.includes(number)) {
        targetNumber.push(number);
      }
    }

    return targetNumber;
  }
}

export default BaseBallGameModel;
