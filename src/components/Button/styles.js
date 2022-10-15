import styled, { css } from 'styled-components';

export const ButtonShape = styled.button`
  ${({ theme, background }) => css`
    width: ${theme.buttons.width.regular};
    height: ${theme.buttons.heigth.regular};
    border: none;
    border-radius: ${theme.buttons.border.radius};
    margin: ${theme.spacings.margins.large} 0;
    background: ${background ? theme.colors.lightColor : 'none'};
    background: ${theme.name === 'dark' && background && (theme.colors.secondaryAltColor)};
    color: ${theme.name === 'dark' && background === false ? theme.colors.whiteColor : theme.colors.blackColor}
  `}
`;
