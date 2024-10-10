export const validateUserGuess = (userGuess) => {
  if (userGuess.length !== 3) {
    throw new Error('숫자는 3자리여야 합니다.');
  }

  const userGuessArray = userGuess.split('');

  const isAllNumbers = userGuessArray.every((char) => !isNaN(char));
  if (!isAllNumbers) {
    throw new Error('숫자만 입력할 수 있습니다.');
  }

  const isAllUnique = new Set(userGuessArray).size === userGuessArray.length;
  if (!isAllUnique) {
    throw new Error('중복되지 않는 숫자만 입력할 수 있습니다.');
  }

  const isAllInRange = userGuessArray.every((char) => char >= 1 && char <= 9);
  if (!isAllInRange) {
    throw new Error('1~9 사이의 숫자만 입력할 수 있습니다.');
  }
};

export const validateRestartOrExit = (userInput) => {
  if (userInput !== '1' && userInput !== '2') {
    throw new Error('1 또는 2만 입력할 수 있습니다.');
  }
};
