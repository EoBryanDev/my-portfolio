import styled, { css } from 'styled-components';

export const ResumeButton = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.name === 'dark' ? theme.colors.whiteColor : theme.colors.secondaryColor};
    color: ${theme.name === 'dark' ? theme.colors.blackColor : theme.colors.lightColor};
    border-radius: 5px;
    height: 40px;
    font-size: 20px;
    margin-top: 30%;
    width:100%;

    &:hover, &:active{
      background-color: ${theme.name === 'dark' ? theme.colors.whiteColor : theme.colors.thirdColor};
      color: ${theme.name === 'dark' ? theme.colors.backgroundColor : theme.colors.darkColor};

    }
  `}

`;
