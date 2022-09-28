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
  background: linear-gradient(180deg, #1363FF 22.4%, #3CFF4F 100%);
  transition: all 0.3s ease-in-out;
  `}


`;
