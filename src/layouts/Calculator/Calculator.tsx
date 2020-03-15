import React from 'react';
import { useTranslation } from 'react-i18next';
import { Scrollbars } from 'react-custom-scrollbars';
import { FaGithub } from 'react-icons/fa';

import * as S from './styles';
import useCalculate from '../../hooks/useCalculate/useCalculate';
import Button from '../../components/Button/Button';
import calculatorButtons from '../../constants/calculatorButtons';
import Link from '../../components/Link/Link';

const Calculator = () => {
  const { t } = useTranslation();
  const {
    expression, evaluatedExpression, showResult, addValueToExpression,
  } = useCalculate();

  return (
    <S.Calculator>
      <S.Header>
        {t('Calculator')}
        <Link
          href={t('Link.Repository.Href')}
        >
          <FaGithub size={30} />
        </Link>
      </S.Header>
      <S.Screen>
        <Scrollbars
          style={{ height: showResult ? 42 : 64 }}
          renderThumbHorizontal={({ style }) => <S.Thumb style={style} />}
        >
          <S.Expression showResult={showResult}>
            {expression}
          </S.Expression>
        </Scrollbars>
        <Scrollbars
          style={{ height: showResult ? 64 : 42 }}
          renderThumbHorizontal={({ style }) => <S.Thumb style={style} />}
        >
          <S.Result showResult={showResult}>
            {evaluatedExpression}
          </S.Result>
        </Scrollbars>
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
            handleAddValueToExpression={addValueToExpression}
          >
            {icon || value}
          </Button>
        ))}
      </S.Keyboard>
    </S.Calculator>
  );
};

export default Calculator;
