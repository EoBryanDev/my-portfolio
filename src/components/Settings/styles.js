import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, settingsClose }) => css`
    display: ${settingsClose ? 'none' : 'flex'};
    position: absolute;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    top: 220px;
    right: 0;

    background: ${theme.colors.darkColor};
    height: 50px;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
  `}
`;
