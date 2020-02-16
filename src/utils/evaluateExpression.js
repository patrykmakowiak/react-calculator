import { evaluate } from 'mathjs';
import unifyToEvaluate from './unifyToEvaluate';

const evaluateExpression = (expressionStr, translation) => {
  let evaluatedExpression;
  let status;
  try {
    evaluatedExpression = evaluate(unifyToEvaluate(expressionStr));
    status = 'succes';
  } catch (error) {
    evaluatedExpression = translation('Errors.MathExpression');
    status = 'error';
  }
  return { evaluatedExpression, status };
};

export default evaluateExpression;
