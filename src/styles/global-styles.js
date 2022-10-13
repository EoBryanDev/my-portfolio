/* eslint-disable no-confusing-arrow */
import { createGlobalStyle } from 'styled-components';

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
    font-family: ${(props) => props.theme.fonts.primaryFont}, 'sans-serif';
    color:  ${(props) => props.theme.colors.blackColor};
    background: linear-gradient(
      180deg, ${(props) => props.theme.colors.primaryColor}
      22.4%, ${(props) => props.theme.colors.thirdColor} 100%)
  }

  h1{
    font-size: ${({ theme }) => theme.sizes.mobile.header};
  }
`;
