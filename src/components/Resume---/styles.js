import styled, { css } from 'styled-components';

export const ResumeButton = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.darkColor};
    color: ${theme.colors.lightColor};
    height: 40px;
    font-size: 20px;
    margin-top: 30%;
    width:100%;

    &:hover{
      background-color: ${theme.colors.thirdColor};
      color: ${theme.colors.darkColor};

    }
  `}

`;
