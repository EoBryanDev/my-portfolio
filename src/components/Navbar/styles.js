import styled, { css } from 'styled-components';

export const NavgationBar = styled.nav`
  ${({ theme }) => css`
    position: sticky;
    top:0;
    z-index: 1;
    width:100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
    align-items: center;
    background: ${theme.name === 'dark' ? theme.colors.primaryColor : theme.colors.whiteColor};
    height: 60px;
    color: ${theme.name === 'dark' ? theme.colors.lightColor : theme.colors.secondaryColor};
    padding: 0 ${theme.spacings.paddings.small};
    border-bottom: 1px solid ${theme.colors.lightColor};
    box-shadow:  ${theme.name === 'dark' ? theme.colors.lightColor
    : theme.colors.darkColor} 1px 1px 10px 1px;
    img{
      padding: 10px;
      width:130px;
      @media only screen and (max-width: ${theme.deviceSizes.mobile}){
        width:80px;

      }

      @media only screen and (max-width: ${theme.deviceSizes.tablet}){
        width:120px;

      }
    }
    p{
      color: ${theme.name === 'dark' ? theme.colors.secondaryColor : theme.colors.blackColor};
    }
    & div {
      display: flex;
      padding: 3px;
    }


  `}


`;
