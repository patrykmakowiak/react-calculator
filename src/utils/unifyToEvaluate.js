import isNumberLastElement from './isNumberLastElement';

const unifyToEvaluate = (expressionStr) => {
  let unifiedExpression = expressionStr;
  if (!isNumberLastElement(expressionStr)) {
    unifiedExpression = expressionStr.slice(0, -1);
  }
  return unifiedExpression;
};

export default unifyToEvaluate;
