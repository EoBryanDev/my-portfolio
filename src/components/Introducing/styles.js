import styled, { css } from 'styled-components';

export const Story = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.whiteColor};
    width: 100%;
    text-align: center;
    img{
      width: 100%;
    }
  `}


`;
