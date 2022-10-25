import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
  margin: 10% 0;
  border-radius: 10px;
  background: ${theme.name === 'dark' ? theme.colors.whiteColor : theme.colors.whiteColor};
  text-align: center;

  h2{
    color: ${theme.name === 'dark' ? theme.colors.darkColor : theme.colors.darkColor};
  }
  p{
    color: ${theme.name === 'dark' ? theme.colors.secondaryAltColor : theme.colors.secondaryColor};
  }
`}
`;

export const Ballon = styled.div`
  padding: 10px;

  p{
    margin: 10px 0 0 0;
  }


  `;
export const TalkButton = styled.div`

  position: relative;
  bottom: -35px;
  text-decoration: none;

`;
