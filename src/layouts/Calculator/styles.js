import styled from 'styled-components';

export const Calculator = styled.div`
  height: 100vh;
  background-color: #000;
  @media (min-width: 768px) {
    height: inherit;
    max-height: 100vh;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }
`;

export const Header = styled.div`
  height: 10%;
  color: #fff;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #444;
`;

export const Screen = styled.div`
  width: 100%;
  height: 25%;
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: right;
`;

export const Thumb = styled.div`
  background-color: #f39c12;
  border-radius: 4px;
  cursor: pointer;
`;

export const Expression = styled.div`
  width: 100%;
  white-space: nowrap;
  color: ${({ showResult }) => (showResult ? '#888' : '#fff')};
  font-size: ${({ showResult }) => (showResult ? '24px' : '42px')};
`;

export const Result = styled.div`
  width: 100%;
  white-space: nowrap;
  color: ${({ showResult }) => (showResult ? '#fff' : '#888')};
  font-size: ${({ showResult }) => (showResult ? '42px' : '24px')};
`;

export const Keyboard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 65%;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
`;
