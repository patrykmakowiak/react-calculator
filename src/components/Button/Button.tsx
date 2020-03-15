import React from 'react';

import * as S from './styles';

type Props = {
  readonly color?: string;
  readonly width?: string;
  readonly backgroundColor?: string;
  readonly value: string;
  readonly handleAddValueToExpression: (value: string) => void;
  readonly children: React.ReactNode;
};

const Button: React.FC<Props> = ({
  color, width, backgroundColor, value, handleAddValueToExpression, children,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const { value } = e.currentTarget;
    handleAddValueToExpression(value);
  };

  return (
    <S.Button
      color={color}
      width={width}
      backgroundColor={backgroundColor}
      value={value}
      onClick={handleClick}
      type="button"
    >
      {children}
    </S.Button>
  )
};

export default Button;
