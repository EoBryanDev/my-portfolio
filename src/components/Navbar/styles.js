import styled, { css } from 'styled-components';

export const NavgationBar = styled.nav`
  ${({ theme }) => css`
    position: sticky;
    top:0;
    z-index: 1;
    width:100%;
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
    /*  Include some way to resize menu in the right way   */
  @media only screen and (min-width: ${theme.deviceSizes.tablet}){
    background-color: black;
  }
  @media only screen and (min-width: ${theme.deviceSizes.desktop}){
    background-color: green;
  }
  `}


`;
