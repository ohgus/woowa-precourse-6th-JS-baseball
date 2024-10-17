import {
  validateRestartOrExit,
  isCorrectLength,
  isAllNumbers,
  isAllUnique,
  isAllInRange,
} from '../src/validator.js';

describe('Validator Tests', () => {
  describe('validateUserGuess', () => {
    test('정상적인 입력', () => {
      expect(() => isCorrectLength('123')).not.toThrow();
    });

    test('길이가 3이 아닌 경우', () => {
      const invalidInputs = [
        '12', // 3보다 작음
        '1234', // 3보다 큼
        '', // 3보다 작음
        '1', // 3보다 작음
        '12345', // 3보다 큼
      ];
      invalidInputs.forEach((input) => {
        expect(() => isCorrectLength(input)).toThrow(
          '[ERROR] 숫자는 3자리여야 합니다.'
        );
      });
    });

    test('숫자가 아닌 문자가 포함된 경우', () => {
      const invalidInputs = [
        ['1', '2', 'a'],
        ['a', 'b', 'c'],
        ['1', 'b', '3'],
        ['a', '2', '3'],
        ['1', ' ', '3'],
        ['1', '.', '3'],
        ['1', '-', '3'],
        ['1', ',', '3'],
        ['1', '/', '3'],
        ['1', '*', '3'],
      ];
      invalidInputs.forEach((inputArray) => {
        // console.log(inputArray);
        // console.log(isAllNumbers(inputArray));
        expect(() => isAllNumbers(inputArray)).toThrow(
          '[ERROR] 숫자만 입력할 수 있습니다.'
        );
      });
    });

    test('중복된 숫자가 있는 경우', () => {
      const invalidInputs = [
        ['1', '1', '2'],
        ['2', '2', '3'],
        ['3', '3', '4'],
        ['4', '4', '5'],
        ['5', '5', '6'],
        ['6', '6', '7'],
        ['7', '7', '8'],
        ['8', '8', '9'],
        ['9', '9', '0'],
        ['1', '1', '1'],
      ];
      invalidInputs.forEach((inputArray) => {
        expect(() => isAllUnique(inputArray)).toThrow(
          '[ERROR] 중복되지 않는 숫자만 입력할 수 있습니다.'
        );
      });
    });

    test('1~9 범위를 벗어난 숫자가 있는 경우', () => {
      const invalidInputs = [
        ['0', '1', '2'],
        ['0', '4', '5'],
        ['12', '7', '8'],
        ['1', '0', '1'],
        ['22', '3', '4'],
        ['51', '6', '7'],
        ['83', '9', '0'],
        ['1', '3', '0'],
        ['42', '5', '6'],
        ['7', '8', '0'],
      ];
      invalidInputs.forEach((inputArray) => {
        expect(() => isAllInRange(inputArray)).toThrow(
          '[ERROR] 1~9 사이의 숫자만 입력할 수 있습니다.'
        );
      });
    });
  });

  describe('validateRestartOrExit', () => {
    test('정상적인 입력', () => {
      expect(() => validateRestartOrExit('1')).not.toThrow();
      expect(() => validateRestartOrExit('2')).not.toThrow();
    });

    test('1 또는 2가 아닌 경우', () => {
      const invalidInputs = [
        '0',
        '3',
        'a',
        ' ',
        '',
        '12',
        '21',
        '11',
        '22',
        '1 ',
        ' 2',
      ];
      invalidInputs.forEach((input) => {
        expect(() => validateRestartOrExit(input)).toThrow(
          '[ERROR] 1 또는 2만 입력할 수 있습니다.'
        );
      });
    });
  });
});
