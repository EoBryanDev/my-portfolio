import styled, { css } from 'styled-components';
import { ButtonShape } from '../Button/styles';

export const Container = styled.section`
  ${({ theme }) => css`
  margin: 30% 0;
  border-radius: 10px;
  background: ${theme.name === 'dark' ? theme.colors.whiteColor : theme.colors.thirdColor};
  text-align: center;

  h2{
    color: ${theme.name === 'dark' ? theme.colors.darkColor : theme.colors.darkColor};
  }
  p{
    color: ${theme.name === 'dark' ? theme.colors.secondaryAltColor : theme.colors.textColor};
  }
`}
`;

export const Ballon = styled.div`
  padding: 10px;

  p{
    margin: 10px 0 0 0;
  }


  `;
export const TalkButton = styled(ButtonShape)`

  position: relative;
  bottom: -35px;
  width: 140px;
  height: 35px;
  border-radius: 5px;
  background: ${({ theme }) => (theme.name === 'dark' ? theme.colors.blackColor : theme.colors.secondaryColor)};
  color: ${({ theme }) => (theme.name === 'dark' ? theme.colors.whiteColor : theme.colors.blackColor)};

`;
