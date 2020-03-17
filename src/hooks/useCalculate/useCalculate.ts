import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import isNumber from '../../utils/isNumber/isNumber';
import isNumberLastElement from '../../utils/isNumberLastElement/isNumberLastElement';
import convertPercentage from '../../utils/convertPercentage/convertPercentage';
import evaluateExpression from '../../utils/evaluateExpression/evaluateExpression';

const useCalculate = () => {
  const { t } = useTranslation();
  const [expression, setExpression] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);
  const { evaluatedExpression, status } = evaluateExpression(expression, t('Error.MathExpression'));

  const addValueToExpression = useCallback((value: string) => {
    if (showResult) {
      setShowResult(false);
    }
    if (isNumber(value)) {
      setExpression((prevState) => prevState + value);
    } else if (value === '=') {
      setShowResult(true);
    } else if (value === '%') {
      setExpression((prevState) => convertPercentage(prevState + value));
    } else if (value === 'AC') {
      setExpression('');
    } else if (value === 'C') {
      setExpression((prevState) => prevState.slice(0, -1));
    } else if (isNumberLastElement(expression) || !expression.length) {
      setExpression((prevState) => prevState + value);
    } else if (!isNumberLastElement(expression) && expression.length) {
      setExpression((prevState) => prevState.slice(0, -1) + value);
    }
  }, [expression, showResult]);

  return {
    expression,
    evaluatedExpression,
    showResult,
    status,
    addValueToExpression,
  };
};

export default useCalculate;
