import React from 'react';

import * as S from './styles';

type Props = {
  readonly href: string;
  readonly children: React.ReactNode;
};

const Link: React.FC<Props> = ({ href, children}) => (
  <S.StyledBtn
    href={href}
  >
    {children}
  </S.StyledBtn>
);

export default Link;
