import styled, { css } from 'styled-components';

export const Icon = styled.button`
  ${({ theme }) => css`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 30px;
    right: 30px;

    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.whiteColor};
    font-size: 20px;
    font-weight: 700;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: none;
    box-shadow: 2px 2px ${theme.colors.darkColor};

    &:active{
      background-color: ${theme.colors.whiteColor};
      color: ${theme.colors.primaryColor};
      box-shadow: 2px 2px ${theme.colors.primaryColor};
    }
  `}
`;
