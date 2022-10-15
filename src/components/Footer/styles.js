import styled, { css } from 'styled-components';

export const Container = styled.h4`
  ${({ theme }) => css`
    margin: 10px 0;
    text-align: center;
    color: ${theme.name === 'dark' ? theme.colors.secondaryAltColor : theme.colors.blackColor}
  `}
`;
