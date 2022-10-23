import styled, { css } from 'styled-components';

export const ButtonShape = styled.button`
  ${({ theme, background }) => css`
    width: ${theme.buttons.width.regular};
    height: ${theme.buttons.heigth.regular};
    border: ${background === false ? '1px solid' : 'none'};
    border-radius: ${theme.buttons.border.radius};
    margin: ${theme.spacings.margins.large} 10px;
    background: ${background ? theme.colors.thirdColor : 'none'};
    background: ${theme.name === 'dark' && background && (theme.colors.secondaryAltColor)};
    color: ${theme.name === 'dark' && background === false ? theme.colors.whiteColor : theme.colors.blackColor}
  `}
`;
