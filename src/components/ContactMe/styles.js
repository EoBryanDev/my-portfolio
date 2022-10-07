import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    margin-top: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: ${theme.colors.thirdColor};
    text-align: center;

    h2{
      color: ${theme.colors.darkColor};
    }
  `}
`;

export const Ballon = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p{
    margin: 10px 0;
  }

  button{
    position: relative;
    bottom: -20px;
    width: 140px;
    height: 30px;
    border: 1px solid;
    border-radius: 5px;
  }

`;
