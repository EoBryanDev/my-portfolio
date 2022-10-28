import styled, { css } from 'styled-components';

export const Item = styled.li`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: ${theme.spacings.paddings.medium};
    margin: ${theme.spacings.margins.medium};
    transition: 0.5s ease-in-out;

    &:hover{
      color: ${theme.name === 'dark' ? theme.colors.backgroundColor : theme.colors.darkColor};
    }
  `}
`;
