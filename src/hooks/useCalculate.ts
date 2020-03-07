import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import calculatorButtons from '../constants/calculatorButtons';
import isNumber from '../utils/isNumber';
import isNumberLastElement from '../utils/isNumberLastElement';
import convertPercentage from '../utils/convertPercentage';
import evaluateExpression from '../utils/evaluateExpression';

const useCalculate = () => {
  const { t } = useTranslation();
  const [expression, setExpression] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);
  const { evaluatedExpression, status } = evaluateExpression(expression, t);

  const addValueToExpression = useCallback((value) => {
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

  const handleKeyboard = useCallback((e: KeyboardEvent): void => {
    const selectedButton = calculatorButtons
      .find(({ value, key, keyCodes }) => {
        if (e.key) {
          return value === e.key || key === e.key;
        }
        if (e.keyCode && keyCodes) {
          return keyCodes.find((keyCode) => keyCode === e.keyCode);
        }
        return false;
      });

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

  const handleButtonClick = useCallback((e: React.MouseEvent<HTMLButtonElement>): void => {
    const { value } = e.currentTarget;
    addValueToExpression(value);
  }, [addValueToExpression]);

  return {
    expression,
    evaluatedExpression,
    showResult,
    status,
    handleButtonClick,
  };
};

export default useCalculate;
