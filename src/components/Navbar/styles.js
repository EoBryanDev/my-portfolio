import styled, { css } from 'styled-components';

export const NavgationBar = styled.nav`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: ${theme.colors.primaryColor};
    height: 60px;
    color: ${theme.colors.whiteColor};
    padding: 0 ${theme.spacings.paddings.small};
  `}


`;
