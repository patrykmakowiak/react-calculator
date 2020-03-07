import isNumberLastElement from './isNumberLastElement';

const unifyToEvaluate = (expression: string): string => {
  let unifiedExpression = expression;
  if (!isNumberLastElement(expression)) {
    unifiedExpression = expression.slice(0, -1);
  }
  return unifiedExpression;
};

export default unifyToEvaluate;
