import { evaluate } from 'mathjs';

import unifyToEvaluate from '../unifyToEvaluate/unifyToEvaluate';

type EvaluatedExpression = {
  evaluatedExpression: number | string;
  status: string;
}
const evaluateExpression = (expressionStr: string, errorMsg: string): EvaluatedExpression => {
  let evaluatedExpression;
  let status;
  try {
    evaluatedExpression = evaluate(unifyToEvaluate(expressionStr));
    status = 'succes';
  } catch (error) {
    evaluatedExpression = errorMsg;
    status = 'error';
  }
  return { evaluatedExpression, status };
};

export default evaluateExpression;
