import React from 'react';

import Calculator from './layouts/Calculator/Calculator';
import * as S from './styles';

function App() {
  return (
    <S.App>
      <S.GlobalStyle />
      <S.Wrapper>
        <Calculator />
      </S.Wrapper>
    </S.App>
  );
}

export default App;
