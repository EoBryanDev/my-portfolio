import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme, background, int }) => css`
    height: ${int ? '100vh' : '50vh'};
    padding: ${theme.spacings.paddings.xlarge};
    background: ${background ? '' : theme.colors.whiteColor};
    margin: ${theme.spacings.margins.xlarge} 0;
  `}
`;
