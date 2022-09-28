import styled, { css } from 'styled-components';

export const MenuComponent = styled.ul`
  ${({ theme, menuClose }) => css`
    display: ${menuClose ? 'none' : 'flex'};
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: ${theme.spacings.paddings.medium};
    background: linear-gradient(180deg, #1363FF 22.4%, #3CFF4F 100%)
  `}

`;
