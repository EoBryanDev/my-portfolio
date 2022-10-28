/* eslint-disable no-confusing-arrow */
import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  ${({ theme }) => css`
  /* width */
  ::-webkit-scrollbar {
    width: 7px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: ${theme.colors.lightColor};
    border-radius: 10px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    width: 5px;
    background: ${theme.name === 'dark' ? theme.colors.secondaryColor : theme.colors.thirdColor};
    border-radius: 10px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.name === 'dark' ? '#1363FF' : '#196e21'};
  }
  `}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  *::selection{
    color: ${({ theme }) => (theme.name === 'dark' ? theme.colors.blackColor : theme.colors.whiteColor)};
    background: ${({ theme }) => (theme.name === 'dark' ? theme.colors.whiteColor : theme.colors.darkColor)};
  }

  html{
    scroll-behavior: smooth;
  }

  body {
    font-size: 16px;
    font-family: ${(props) => props.theme.fonts.secondaryFont}, 'sans-serif';
    color:  ${(props) => props.theme.colors.blackColor};
    background: ${({ theme }) => theme.colors.whiteColor};
    /*background: linear-gradient(
      180deg, ${(props) => props.theme.colors.primaryColor}
      22.4%, ${(props) => props.theme.colors.thirdColor} 100%);*/
    background : ${({ theme }) => theme.name === 'dark' && (theme.colors.blackColor)};
  }
  a{
    text-decoration: none;
    cursor: pointer;
  }
  a:visited{
    color: inherit
  }
  h1,h2,h3,h4,h5,h6{
    font-family: ${({ theme }) => theme.fonts.primaryFont}, 'sans-serif';
  }

  h1{
    font-size: ${({ theme }) => theme.sizes.mobile.header};

    @media only screen and (min-width: ${({ theme }) => theme.deviceSizes.tablet}){
      font-size: ${({ theme }) => theme.sizes.tablet.header};
    }
    @media only screen and (min-width: ${({ theme }) => theme.deviceSizes.desktop}){
      font-size: ${({ theme }) => theme.sizes.desktop.header};
    }
  }
  h2{
    font-size: ${({ theme }) => theme.sizes.mobile.subtitle};

    @media only screen and (min-width: ${({ theme }) => theme.deviceSizes.tablet}){
      font-size: ${({ theme }) => theme.sizes.tablet.smHeader};
    }
    @media only screen and (min-width: ${({ theme }) => theme.deviceSizes.desktop}){
      font-size: ${({ theme }) => theme.sizes.desktop.mdHeader};
    }
  }
  h4{
    font-size: ${({ theme }) => theme.sizes.mobile.text};

    @media only screen and (min-width: ${({ theme }) => theme.deviceSizes.tablet}){
      font-size: ${({ theme }) => theme.sizes.tablet.smSubtitle};
    }
    @media only screen and (min-width: ${({ theme }) => theme.deviceSizes.desktop}){
      font-size: ${({ theme }) => theme.sizes.desktop.smHeader};
    }
  }

  ${({ theme }) => css`
    p{
      color: ${theme.name === 'dark' ? theme.colors.secondaryAltColor : theme.colors.blackColor}

    }
    @media only screen and (min-width: ${theme.deviceSizes.tablet}){
      p{
        font-size: ${theme.sizes.tablet.text};
      }
  }
    @media only screen and (min-width: ${theme.deviceSizes.desktop}){
      p{
        font-size: ${theme.sizes.desktop.text};
      }
  }

  #section1,#section2,#section3,#section4,#section5,#section6{
 padding: 70px 0;

}
  `}
`;
