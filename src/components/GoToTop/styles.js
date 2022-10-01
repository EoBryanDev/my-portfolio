import styled, { css } from 'styled-components';

export const Icon = styled.div`
  ${({ theme }) => css`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 30px;
    right: 30px;

    background-color: ${theme.colors.thirdColor};
    height: 50px;
    width: 50px;
    border-radius: 50%;
  `}
`;
