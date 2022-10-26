import styled, { css } from 'styled-components';

export const ButtonShape = styled.button`
  ${({ theme, background }) => css`
  a{
      color: ${theme.name === 'dark' && background === false ? theme.colors.whiteColor : theme.colors.blackColor}
    }
    width: ${theme.buttons.width.regular};
    height: ${theme.buttons.heigth.regular};
    border: ${background === false && theme.name === 'dark' ? '1px solid white' : '1px solid white'};
    border-radius: ${theme.buttons.border.radius};
    margin: ${theme.spacings.margins.large} 10px;
    background: ${background ? theme.colors.thirdColor : 'none'};
    background: ${theme.name === 'dark' && background && (theme.colors.secondaryAltColor)};
    color: ${theme.name === 'dark' && background === false ? theme.colors.whiteColor : theme.colors.blackColor}
    font-size: 16px;

  `}
`;
