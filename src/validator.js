const isCorrectLength = (userGuess) => {
  if (userGuess.length !== 3) {
    throw new Error('[ERROR] 숫자는 3자리여야 합니다.');
  }
};

const isAllNumbers = (userGuessArray) => {
  const isAllNumbers = userGuessArray.every((char) => !isNaN(char));
  if (!isAllNumbers) {
    throw new Error('[ERROR] 숫자만 입력할 수 있습니다.');
  }
};

const isAllUnique = (userGuessArray) => {
  if (new Set(userGuessArray).size !== userGuessArray.length) {
    throw new Error('[ERROR] 중복되지 않는 숫자만 입력할 수 있습니다.');
  }
};

const isAllInRange = (userGuessArray) => {
  if (!userGuessArray.every((char) => char >= 1 && char <= 9)) {
    throw new Error('[ERROR] 1~9 사이의 숫자만 입력할 수 있습니다.');
  }
};

export const validateUserGuess = (userGuess) => {
  isCorrectLength(userGuess);
  const userGuessArray = userGuess.split('');
  isAllNumbers(userGuessArray);
  isAllUnique(userGuessArray);
  isAllInRange(userGuessArray);
};

export const validateRestartOrExit = (userInput) => {
  if (userInput !== '1' && userInput !== '2') {
    throw new Error('[ERROR] 1 또는 2만 입력할 수 있습니다.');
  }
};
