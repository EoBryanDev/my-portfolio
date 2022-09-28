import styled, { css } from 'styled-components';

export const Item = styled.li`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    padding: ${theme.spacings.paddings.medium};
    margin: ${theme.spacings.margins.medium};
  `}
`;
