import styled, { css } from 'styled-components';

export const MenuComponent = styled.ul`
  ${({ theme, menuClose }) => css`
  display: flex;
  position: absolute;
  opacity: ${menuClose ? '0' : 'auto'};
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: ${theme.spacings.paddings.medium};
  backdrop-filter: blur(5px);
  background: ${theme.colors.secondaryColor};
  color: ${theme.name === 'dark' ? theme.colors.darkColor : theme.colors.blackColor};
  transition: all 0.3s ease-in-out;
  `}


`;
