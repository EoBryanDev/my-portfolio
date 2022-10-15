import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, settingsClose }) => css`
    display: ${settingsClose ? 'none' : 'flex'};
    position: fixed;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    top: 60px;
    z-index: 1;
    right: 0;
    backdrop-filter: blur(15px);
    min-height: 100vh;
    min-width: 100vw;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    color: ${theme.name === 'dark' ? theme.colors.whiteColor : theme.colors.blackColor};
    text-transform: capitalize;
    font-size: 30px;

  `}
`;
