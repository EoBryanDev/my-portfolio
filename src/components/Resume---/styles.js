import styled, { css } from 'styled-components';

export const Resume = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.name === 'dark' ? theme.colors.whiteColor : theme.colors.darkColor};
    color: ${theme.name === 'dark' ? theme.colors.blackColor : theme.colors.lightColor};
    border-radius: 5px;
    height: 40px;
    font-size: 20px;
    width: 100%;

    &:hover, &:active{
      background-color: ${theme.name === 'dark' ? theme.colors.blackColor : theme.colors.whiteColor};
      color: ${theme.name === 'dark' ? theme.colors.backgroundColor : theme.colors.darkColor};

    }
  `}

`;
