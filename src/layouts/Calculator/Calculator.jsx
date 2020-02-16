import React from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './styles';
import useCalculate from '../../hooks/useCalculate';
import Button from '../../components/Button/Button';
import calculatorButtons from '../../constants/calculatorButtons';

const Calculator = () => {
  const { t } = useTranslation();
  const {
    expression, evaluatedExpression, showResult, handleButtonClick,
  } = useCalculate();

  return (
    <S.Calculator>
      <S.Header>
        {t('Calculator')}
      </S.Header>
      <S.Screen>
        <S.Expression showResult={showResult}>
          {expression}
        </S.Expression>
        <S.Result showResult={showResult}>
          {evaluatedExpression}
        </S.Result>
      </S.Screen>
      <S.Keyboard>
        {calculatorButtons.map(({
          icon, value, color, backgroundColor, width,
        }) => (
          <Button
            key={value}
            value={value}
            color={color}
            width={width}
            backgroundColor={backgroundColor}
            onClick={handleButtonClick}
          >
            {icon || value}
          </Button>
        ))}
      </S.Keyboard>
    </S.Calculator>
  );
};

export default Calculator;
