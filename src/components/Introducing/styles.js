import styled, { css } from 'styled-components';

export const Story = styled.div`
  ${({ theme }) => css`

    //  background: ${theme.name === 'dark' ? '' : theme.colors.whiteColor};
    width: 100%;
    text-align: center;
    img{
      @media only screen and (min-width: 834px){
        width:50%;
        border-radius: 50%;
        margin: 0 auto;
      }
      width: 100%;
    }
    h1{
      font-size: ${theme.sizes.mobile.header};
      color: ${theme.name === 'dark' ? theme.colors.whiteColor : theme.colors.darkColor};
      text-shadow: ${theme.name === 'dark' ? theme.colors.blackColor : theme.colors.whiteColor} 2px 3px 2px;
      letter-spacing: ${theme.letterSpacings.medium};
      margin-bottom: ${theme.spacings.margins.large};
    }
    p{
      color: ${theme.name === 'dark' ? theme.colors.lightColor : theme.colors.lightColor};
      line-height: 1.5rem;
    }

    div{
      margin-top: 30%;
    }

  `
}`;
