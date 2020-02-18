import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import calculatorButtons from '../constants/calculatorButtons';
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

  const addValueToExpression = useCallback((value) => {
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
  }, [expression, history, showResult]);

  const handleKeyboard = useCallback((e) => {
    const selectedButton = calculatorButtons
      .find(({ value, key }) => (value === e.key || key === e.key));

    if (selectedButton) {
      addValueToExpression(selectedButton.value);
    }
  }, [addValueToExpression]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyboard);
    return () => {
      window.removeEventListener('keydown', handleKeyboard);
    };
  }, [handleKeyboard]);

  const handleButtonClick = (e) => {
    const { value } = e.target;
    addValueToExpression(value);
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
