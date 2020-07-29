import { isNumberLastElement } from '..';

const unifyToEvaluate = (expression: string): string => {
  const unifiedExpression = !isNumberLastElement(expression) ? expression.slice(0, -1) : expression;
  return unifiedExpression;
};

export default unifyToEvaluate;
