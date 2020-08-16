import React from 'react';

import * as S from './styles';

type Props = {
  color?: string;
  width?: string;
  backgroundColor?: string;
  value: string;
  handleAddValueToExpression: (value: string) => void;
  children: React.ReactNode;
};

const Button = ({
  color, width, backgroundColor, value, handleAddValueToExpression, children,
}: Props) => {
  const handleClick = ({ currentTarget: { value } }: React.MouseEvent<HTMLButtonElement>): void => {
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
