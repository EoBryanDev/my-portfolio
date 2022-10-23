import styled, { css } from 'styled-components';

export const SliderCarrousel = styled.section`
  ${({ theme }) => css`
    height: 80%;
    background-color: ${theme.name === 'dark' ? theme.colors.blackColor : theme.colors.thirdColor};
    border-radius: 10px;
    text-align: center;
    padding: 10px;


    h3, h2{
      color: ${theme.name === 'dark' ? theme.colors.secondaryColor : theme.colors.whiteColor};
      letter-spacing: ${theme.letterSpacings.thin};
      margin: 50px 0;
    }
    p{
      margin: 10px 0;
      text-align: justify;
      color: ${theme.name === 'dark' ? theme.colors.whiteColor : theme.colors.darkColor};
    }
    @media only screen and (min-width: ${theme.deviceSizes.tablet}){
      background: none;
      p{
        padding: 5px;
        height: 160px;
      }
      h2{
        display: flex;
        align-items: center;
        height: 50px;

      }
      h3{
        margin: 10px;
      }
    }
  `}


`;

export const Circle = styled.div`
${({ theme }) => css`
  margin:0 auto;
  display: flex;
  align-items:center;
  justify-content:center;
  height: 120px;
  width: 120px;
  background-color: ${theme.colors.whiteColor};
  border-radius: 50%;
  border: ${theme.name === 'dark' && ('20px solid white')};
  margin-top: 30px;
  margin-bottom: 30px;

  `}

  img{
    width: 100%;
  }

`;
export const TechSlider = styled.div`
${({ theme }) => css`
  border-radius: 10px;
  background-color: white;

  //  height: 100%;
  padding: 5px 10px;

  margin-top: 30px;
  margin-bottom: 30px;

  img{
    margin-top: 10px;
    width: 50%;
  }

  @media only screen and (min-width: ${theme.deviceSizes.tablet}){
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;

    margin: 0 auto;
    width: 98%;
    height: 110px;

    img{
      width: 35px;
    }
  }
  `}
`;

export const SliderContainer = styled.article`
${({ theme }) => css`
    @media only screen and (min-width: ${theme.deviceSizes.tablet}){
      display: none;
    }
  `}
`;

export const CardLargeDevices = styled.article`
${({ theme }) => css`
      display:none;

    @media only screen and (min-width: ${theme.deviceSizes.tablet}){
      display: flex;
      align-items: flex-start;
      justify-content: space-around;
      gap: 20px;

      p{
        text-align: center;
      }
    }
    `}
    `;

export const ContainerCard = styled.div`
   background-color: ${({ theme }) => theme.colors.thirdColor};
   border-radius: 5px;
   width:100%;
   min-height: 770px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;
