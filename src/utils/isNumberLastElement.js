import isNumber from './isNumber';

const isNumberLastElement = (expressionStr) => isNumber(expressionStr[expressionStr.length - 1]);

export default isNumberLastElement;
