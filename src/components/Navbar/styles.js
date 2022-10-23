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
    background: ${theme.name === 'dark' ? theme.colors.primaryColor : theme.colors.whiteColor};
    height: 100%;
    color: ${theme.name === 'dark' ? theme.colors.lightColor : theme.colors.secondaryColor};
    padding: 0 ${theme.spacings.paddings.small};
    border-bottom: 1px solid ${theme.colors.lightColor};
    box-shadow: ;
    p{
      color: ${theme.name === 'dark' ? theme.colors.secondaryColor : theme.colors.blackColor};
    }
    & div {
      display: flex;
      padding: 3px;
    }
    /*  Include some way to resize menu in the right way   */
  @media only screen and (min-width: ${theme.deviceSizes.tablet}){

  }
  @media only screen and (min-width: ${theme.deviceSizes.desktop}){

  }
  `}


`;
