export const isCorrectLength = (userGuess) => {
  if (userGuess.length !== 3) {
    throw new Error('[ERROR] 숫자는 3자리여야 합니다.');
  }
};

export const isAllNumbers = (userGuessArray) => {
  userGuessArray.forEach((char) => {
    if (!/^\d$/.test(char)) {
      throw new Error('[ERROR] 숫자만 입력할 수 있습니다.');
    }
  });
};

export const isAllUnique = (userGuessArray) => {
  if (new Set(userGuessArray).size !== userGuessArray.length) {
    throw new Error('[ERROR] 중복되지 않는 숫자만 입력할 수 있습니다.');
  }
};

export const isAllInRange = (userGuessArray) => {
  if (
    !userGuessArray.every((char) => {
      const num = Number(char);
      return num >= 1 && num <= 9;
    })
  ) {
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
