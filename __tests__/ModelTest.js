import BaseBallGameModel from '../src/Model.js';

describe('BaseBallGameModel', () => {
  let model;

  beforeEach(() => {
    model = new BaseBallGameModel();
  });

  test('should generate a target number with 3 unique digits between 1 and 9', () => {
    const targetNumber = model.generateTargetNumber();
    expect(targetNumber.length).toBe(3);
    expect(new Set(targetNumber).size).toBe(3);
    targetNumber.forEach((number) => {
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(9);
    });
  });

  test('should return the correct hint for a user guess', () => {
    model.targetNumber = [1, 2, 3];
    const result = model.checkUserGuess('134');
    expect(result).toEqual({ strike: 1, ball: 1 });
  });

  test('should return 3 strikes when all digits match', () => {
    model.targetNumber = [1, 2, 3];
    const result = model.checkUserGuess('123');
    expect(result).toEqual({ strike: 3, ball: 0 });
  });

  test('should return 0 strikes and 0 balls when no digits match', () => {
    model.targetNumber = [1, 2, 3];
    const result = model.checkUserGuess('456');
    expect(result).toEqual({ strike: 0, ball: 0 });
  });
});
