import styled, { css } from 'styled-components';

export const Item = styled.li`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    padding: 10px;
    margin: 8px;
  `}
`;
