import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import isNumber from '../utils/isNumber';
import isNumberLastElement from '../utils/isNumberLastElement';
import convertPercentage from '../utils/converPercentage';
import evaluateExpression from '../utils/evaluateExpression';

const useCalculate = () => {
  const { t } = useTranslation();
  const [expression, setExpression] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [history, setHistory] = useState([]);
  const { evaluatedExpression, status } = evaluateExpression(expression, t);

  const handleButtonClick = (e) => {
    const { value } = e.target;
    if (showResult) {
      setShowResult(false);
    }
    if (isNumber(value)) {
      setExpression((prevState) => prevState + value);
    } else if (value === '=') {
      setShowResult(true);
      const copyHistory = [...history];
      copyHistory.push({
        expression,
        result: evaluateExpression(expression),
        date: new Date(),
      });
      setHistory(copyHistory);
    } else if (value === '%') {
      setExpression((prevState) => `${convertPercentage(prevState + value)}`);
    } else if (value === 'AC') {
      setExpression('');
    } else if (value === 'C') {
      setExpression((prevState) => prevState.slice(0, -1));
    } else if (isNumberLastElement(expression) || !expression.length) {
      setExpression((prevState) => prevState + value);
    } else if (!isNumberLastElement(expression) && expression.length) {
      setExpression((prevState) => prevState.slice(0, -1) + value);
    }
  };

  return {
    expression,
    evaluatedExpression,
    showResult,
    status,
    handleButtonClick,
  };
};

export default useCalculate;
