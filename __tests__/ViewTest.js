import BaseBallGameView from '../src/View.js';

describe('BaseBallGameView', () => {
  let view;

  beforeEach(() => {
    view = new BaseBallGameView();
  });

  describe('generateHint', () => {
    test('should return an empty string when there are no strikes and balls', () => {
      expect(view.generateHint(0, 0)).toBe('');
    });

    test('should return ball hint when there is only ball', () => {
      expect(view.generateHint(1, 0)).toBe('1볼');
      expect(view.generateHint(2, 0)).toBe('2볼');
    });

    test('should return strike hint when there is only strike', () => {
      expect(view.generateHint(0, 1)).toBe('1스트라이크');
      expect(view.generateHint(0, 2)).toBe('2스트라이크');
    });

    test('should return both ball and strike hints', () => {
      expect(view.generateHint(1, 1)).toBe('1볼 1스트라이크');
      expect(view.generateHint(2, 2)).toBe('2볼 2스트라이크');
    });
  });
});
