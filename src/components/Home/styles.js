import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
  height: 90vh;
  padding: ${theme.spacings.paddings.xlarge};
  `}
`;

export const ButtonContainer = styled.div`
  display: flex;
`;
