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

const Button: React.FC<Props> = ({
  color, width, backgroundColor, value, handleAddValueToExpression, children,
}) => {
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
