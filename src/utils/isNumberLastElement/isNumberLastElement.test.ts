import isNumberLastElement from './isNumberLastElement';

it('should return true if the input is the string which contains a number on the last position',
  () => {
    expect(isNumberLastElement('45+65')).toBeTruthy();
  }
);

it('should return false if the input is the string which not contains a number on the last position',
  () => {
    expect(isNumberLastElement('5-15+')).toBeFalsy();
  }
);