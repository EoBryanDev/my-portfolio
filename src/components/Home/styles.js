import styled, { css } from 'styled-components';

export const Container = styled.div`


  h4{
    margin: ${({ theme }) => theme.spacings.margins.xlarge} 0 0 0;
    font-weight: ${({ theme }) => theme.fontWeights.thin};
    color: ${({ theme }) => (theme.name === 'dark' ? theme.colors.secondaryAltColor : theme.colors.whiteColor)}
  }

  .profile{
    width: 100%;
    border-bottom-left-radius: 110px 80px;
    border-bottom-right-radius: 110px 80px;
    margin-bottom: 50px;
    transition: all 1s ease-in-out;

  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;

`;

export const CheckOutMe = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => (theme.name === 'dark' ? theme.colors.secondaryAltColor : theme.colors.lightColor)}

`;

export const Bloob = styled.div`

  ${({ theme }) => css`
    position: absolute;
    z-index: -1;
    top: 520px;
    right: 40px;
    width: 240px;
    height: 300px;
    background-image: linear-gradient(45deg, ${theme.name === 'dark' ? theme.colors.secondaryAltColor : theme.colors.secondaryColor} 0%, ${theme.name === 'dark' ? theme.colors.backgroundColor : theme.colors.thirdColor} 100%);
    border-radius: 83% 17% 95% 5% / 36% 58% 42% 64% ;
    box-shadow:  ${theme.name === 'dark' ? theme.colors.whiteColor
    : theme.colors.secondaryColor} 1px 5px 20px 20px;
  `}


`;
