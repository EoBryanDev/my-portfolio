import styled, { css } from 'styled-components';

export const NavgationBar = styled.nav`
  ${({ theme }) => css`
    position: sticky;
    top:0;
    z-index: 1;
    width:100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;
    background: ${theme.name === 'dark' ? theme.colors.primaryColor : theme.colors.whiteColor};
    height: 60px;
    color: ${theme.name === 'dark' ? theme.colors.lightColor : theme.colors.secondaryColor};
    padding: 0 ${theme.spacings.paddings.small};
    border-bottom: 1px solid ${theme.colors.lightColor};
    box-shadow:  0 1px 20px ${theme.name === 'dark' ? theme.colors.lightColor
    : theme.colors.darkColor};

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
      align-items: center;
      padding: 3px;
    }
    ul{
      text-transform:capitalize;
      list-style: none;
      display: flex;
      padding: 3px;
    }
    li{
      margin: 0 5px;
      padding: 3px;
    }


  `}


`;
