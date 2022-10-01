import styled, { css } from 'styled-components';

export const Title = styled.h1`
  ${({ theme, colorDark }) => css`
    font-size: ${theme.sizes.mobile.header};
    color: ${colorDark ? theme.colors.thirdColor : theme.colors.whiteColor};
    margin-bottom: ${theme.spacings.margins.small};
  `}
`;
