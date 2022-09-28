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
    font-family: ${({ theme }) => theme.fonts.primaryFont}, 'sans-serif';
    color: ${({ theme }) => theme.colors.blackColor};
    background: linear-gradient(180deg, #1363FF 22.4%, #3CFF4F 100%)
  }

  h1{
    font-size: ${({ theme }) => theme.sizes.mobile.header};
  }
`;
