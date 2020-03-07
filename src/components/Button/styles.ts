import styled from 'styled-components';

type ButtonProps = {
  readonly width?: string;
  readonly backgroundColor?: string;
  readonly color?: string;
};

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => (width || '25%')};
  height: 20%;
  background-color: ${({ backgroundColor }) => (backgroundColor || '#333')};
  color: ${({ color }) => (color || '#fff')};
  border: 0;
  font-size: 24px;
  position: relative;
  &:focus {
    outline: 0;
  }
  &:before {
    content: '';
    width: 30px;
    height: 30px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 50%;
    opacity: 0;
    position: absolute;
    transition: 0.2s;
  }
  &:hover:before, &:focus:before {
    opacity: 0.1;
    height: 60px;
    width: 60px;
  }
`;
