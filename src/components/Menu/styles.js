import styled, { css } from 'styled-components';

export const MenuComponent = styled.ul`
  ${({ toggled }) => css`
    display: ${toggled ? 'flex' : 'none'};
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    border: 1px red solid;
    padding: 10px;
  `}
`;
