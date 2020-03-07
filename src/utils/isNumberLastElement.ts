import isNumber from './isNumber';

const isNumberLastElement = (expressionStr: string): boolean => (
  isNumber(expressionStr[expressionStr.length - 1])
);

export default isNumberLastElement;
