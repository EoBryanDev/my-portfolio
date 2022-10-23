/* eslint-disable no-confusing-arrow */
import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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

  h1,h2,h3,h4,h5,h6{
    font-family: ${({ theme }) => theme.fonts.primaryFont}, 'sans-serif';
  }

  h1{
    font-size: ${({ theme }) => theme.sizes.mobile.header};
  }

  ${({ theme }) => css`
    p{
      color: ${theme.name === 'dark' ? theme.colors.secondaryAltColor : theme.colors.blackColor}
    }
  `}
`;
