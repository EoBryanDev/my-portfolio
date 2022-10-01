import styled, { css } from 'styled-components';

export const Title = styled.h1`
  ${({ theme, colorDark }) => css`
    font-size: ${theme.sizes.mobile.header};
    color: ${colorDark ? theme.colors.whiteColor : theme.colors.darkColor};
    text-shadow: ${theme.colors.secondaryColor} 2px 3px 2px;
    letter-spacing: ${theme.letterSpacings.medium};
    margin-bottom: ${theme.spacings.margins.small};

    &:hover{
      color: ${colorDark ? theme.colors.darkColor : theme.colors.whiteColor};
      text-shadow: ${theme.colors.secondaryColor} 2px 3px 2px;
    }
  `}
`;
