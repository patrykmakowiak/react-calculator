import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  width: PropTypes.string,
};

const defaultProps = {
  color: '',
  width: '',
  backgroundColor: '',
};

const Button = ({
  color, backgroundColor, value, width, onClick, children,
}) => (
  <S.Button
    onClick={onClick}
    color={color}
    width={width}
    backgroundColor={backgroundColor}
    value={value}
    type="button"
  >
    {children}
  </S.Button>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
