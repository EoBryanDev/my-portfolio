import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme, background }) => css`
    height: 100vh;
    padding: ${theme.spacings.paddings.xlarge};
    background-color: ${background ? '' : theme.colors.whiteColor};
    margin: ${theme.spacings.margins.xlarge} 0;
  `}
`;
