import isNumberLastElement from './isNumberLastElement';

it('should return true if the input is the string which contains a number in the last position',
  () => {
    expect(isNumberLastElement('45+65')).toBeTruthy();
  }
);

it('should return false if the input is the string which does not contains a number in the last position',
  () => {
    expect(isNumberLastElement('5-15+')).toBeFalsy();
  }
);