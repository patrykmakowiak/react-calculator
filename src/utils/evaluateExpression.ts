import { TFunction } from 'i18next';
import { evaluate } from 'mathjs';

import unifyToEvaluate from './unifyToEvaluate';

type EvaluatedExpression = {
  evaluatedExpression: string;
  status: string;
}
const evaluateExpression = (expressionStr: string, translation: TFunction): EvaluatedExpression => {
  let evaluatedExpression;
  let status;
  try {
    evaluatedExpression = evaluate(unifyToEvaluate(expressionStr));
    status = 'succes';
  } catch (error) {
    evaluatedExpression = translation('Error.MathExpression');
    status = 'error';
  }
  return { evaluatedExpression, status };
};

export default evaluateExpression;
