import styled, { css } from 'styled-components';

export const Container = styled.div`
${({ theme }) => css`

  h4{
    margin: ${theme.spacings.margins.xlarge} 0 0 0;
    font-weight: ${theme.fontWeights.thin};
    color: ${(theme.name === 'dark' ? theme.colors.lightColor : theme.colors.darkColor)}
  }

  .profile{
    width: 100%;
    border-bottom-left-radius: 110px 80px;
    border-bottom-right-radius: 110px 80px;
    margin-bottom: 50px;
    transition: all 1s ease-in-out;

  }
  @media only screen and (min-width: ${theme.deviceSizes.tablet}){
    //  add display flex and divide colunmns
    .profile{
    width: 45%;
    margin-left: 40%;

  }

  .react-icons:hover {
    color: ${(theme.name === 'dark' ? theme.colors.secondaryAltColor : theme.colors.darkColor)};
  }
  `}
`;

export const MeContainer = styled.div`
@media only screen and (min-width: ${({ theme }) => theme.deviceSizes.tablet}){

  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 0;
  align-items: center;
}
`;
export const TextContainer = styled.div`
@media only screen and (min-width: ${({ theme }) => theme.deviceSizes.tablet}){
  width: 40%;
  display: flex;
  flex-direction: column;


}
`;
export const ImgContainer = styled.div`
@media only screen and (min-width: ${({ theme }) => theme.deviceSizes.tablet}){
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .profile{
    width:90%;
  }
}
@media only screen and (min-width: ${({ theme }) => theme.deviceSizes.desktop}){
  .profile{
    width:100%;
  }
}
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

`;

export const CheckOutMe = styled.div`
${({ theme }) => css`

  @media only screen and (min-width: ${theme.deviceSizes.desktop}) {
    margin-top: 5%;

  }
  @media only screen and (min-width: ${theme.deviceSizes.tablet}) {
    display: flex;
    justify-content: space-around;

  }
  p{
    color: ${theme.name === 'dark' ? theme.colors.whiteColor : theme.colors.darkColor};
  }
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${theme.name === 'dark' ? theme.colors.secondaryColor : theme.colors.thirdColor}

`}

`;

export const Bloob = styled.div`
  ${({ theme }) => css`
    position: absolute;
    z-index: -1;
    top: 63%;
    right: 40px;
    width: 240px;
    height: 300px;
    background-image: linear-gradient(45deg, ${theme.name === 'dark' ? theme.colors.secondaryAltColor : theme.colors.secondaryColor} 0%, ${theme.name === 'dark' ? theme.colors.backgroundColor : theme.colors.thirdColor} 100%);
    border-radius: 83% 17% 95% 5% / 36% 58% 42% 64% ;
    /*box-shadow:  ${theme.name === 'dark' ? theme.colors.whiteColor
    : theme.colors.secondaryColor} 1px 5px 20px 20px;*/
    animation: growing 1.2s infinite alternate;
    transition: all 2s ease-in-out;


    @media only screen and (min-width: ${theme.deviceSizes.tablet}){
      width: 340px;
      top: 20%;
      right: 10%;
      height: 400px;
    }
    @media only screen and (min-width: ${theme.deviceSizes.desktop}) {
      width: 440px;
      height: 540px;
      top: 20%;
      right: 10%;
    }

    @keyframes growing{
      0%{
        box-shadow:  ${theme.name === 'dark' ? theme.colors.whiteColor
    : theme.colors.secondaryColor} 1px 5px 20px 10px;
      }
      100%{
        box-shadow:  ${theme.name === 'dark' ? theme.colors.whiteColor
    : theme.colors.secondaryColor} 1px 5px 40px 30px;
      }
    }
  `}
`;
