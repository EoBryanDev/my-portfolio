import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: ${theme.colors.darkColor};
    text-align: center;
  `}
`;

export const Ballon = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


`;
