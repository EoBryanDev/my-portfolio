import styled, { css } from 'styled-components';

export const MenuComponent = styled.ul`
  ${({ theme, menuClose }) => css`
  display: flex;
  z-index: 1;
  position: fixed;
  opacity: ${menuClose ? '0' : 'auto'};
  align-items: center;
  justify-content: space-around;
  padding: ${theme.spacings.paddings.medium};
  backdrop-filter: blur(5px);
  background: ${theme.name === 'dark' ? theme.colors.secondaryColor : theme.colors.thirdColor};
  color: ${theme.name === 'dark' ? theme.colors.darkColor : theme.colors.blackColor};
  transition: all 0.3s ease-in-out;
  width:100%;
  flex-wrap: wrap;

  a{
    color: ${theme.name === 'dark' ? theme.colors.darkColor : theme.colors.blackColor};
  }

  a, a:visited, a:active{
    color: ${theme.name === 'dark' ? theme.colors.darkColor : theme.colors.blackColor};
  }

  `}



`;
