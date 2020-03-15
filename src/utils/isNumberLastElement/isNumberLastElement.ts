import { isNumber } from '..';

const isNumberLastElement = (expressionStr: string): boolean => (
  isNumber(expressionStr[expressionStr.length - 1])
);

export default isNumberLastElement;
