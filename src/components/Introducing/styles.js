import styled, { css } from 'styled-components';

export const Story = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.whiteColor};
    width: 100%;
    text-align: center;
    img{
      width: 100%;
    }
    h1{
      font-size: ${theme.sizes.mobile.header};
      color: ${theme.colors.darkColor};
      text-shadow: ${theme.colors.secondaryColor} 2px 3px 2px;
      letter-spacing: ${theme.letterSpacings.medium};
      margin-bottom: ${theme.spacings.margins.large};
    `}

`;
