import styled, { css } from 'styled-components';

export const NavgationBar = styled.nav`
  ${({ theme }) => css`
    position: sticky;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: ${theme.colors.primaryColor};
    height: 60px;
    color: ${theme.colors.lightColor};
    padding: 0 ${theme.spacings.paddings.small};
    border-bottom: 1px solid ${theme.colors.lightColor};

    & div {
      display: flex;
      padding: 3px;
    }
  `}


`;
