import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Link = ({ href, children }) => (
  <S.StyledBtn
    href={href}
  >
    {children}
  </S.StyledBtn>
);

Link.propTypes = propTypes;

export default Link;
