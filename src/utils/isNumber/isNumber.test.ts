import isNumber from './isNumber';

it('should return true if char is digit', () => {
  expect(isNumber('5')).toBeTruthy();
});

it('should return false if char is not digit', () => {
  expect(isNumber('a')).toBeFalsy();
});

it('should return false if char is operator', () => {
  expect(isNumber('+')).toBeFalsy();
});
