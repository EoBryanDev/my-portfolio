import styled, { css } from 'styled-components';

export const MenuComponent = styled.ul`
  ${({ theme, toggled }) => css`
    display: ${toggled ? 'flex' : 'none'};
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10px;
    background: ${theme.colors.secondaryColor};
  `}
`;
