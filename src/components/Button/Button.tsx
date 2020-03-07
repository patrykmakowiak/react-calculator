import React from 'react';

import * as S from './styles';

type Props = {
  readonly color?: string;
  readonly width?: string;
  readonly backgroundColor?: string;
  readonly value: string;
  readonly onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  readonly children: React.ReactNode;
};

const Button: React.FC<Props> = ({
  color, width, backgroundColor, value, onClick, children,
}) => (
    <S.Button
      color={color}
      width={width}
      backgroundColor={backgroundColor}
      value={value}
      onClick={onClick}
      type="button"
    >
      {children}
    </S.Button>
  );

export default Button;
