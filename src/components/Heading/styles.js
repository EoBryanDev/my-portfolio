import styled, { css } from 'styled-components';

export const Title = styled.h1`
  ${({ theme }) => css`
    font-family: 'Inter';
    font-size: ${theme.sizes.mobile.header};
    color: ${theme.name === 'dark' ? theme.colors.secondaryColor : theme.colors.thirdColor};
    text-shadow: ${theme.name === 'dark' ? theme.colors.darkColor : theme.colors.lightColor} 2px 3px 2px;
    letter-spacing: ${theme.letterSpacings.medium};
    margin-bottom: ${theme.spacings.margins.small};

    @media only screen and (min-width: ${theme.deviceSizes.tablet}) {
      font-size: ${theme.sizes.tablet.header};

    }
    @media only screen and (min-width: ${theme.deviceSizes.desktop}) {
      font-size: ${theme.sizes.desktop.header};

    }

  `}
`;
