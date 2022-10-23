import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme, background, int }) => css`
    min-height: ${int ? '100vh' : '50vh'};
    padding: ${theme.spacings.paddings.xlarge};
    background: ${background ? '' : theme.colors.secondaryColor};
    background: ${theme.name === 'dark' && background === false && (theme.colors.backgroundColor)};
    margin: ${theme.spacings.margins.xlarge} 0;
  `}
`;
