import styled, { css } from 'styled-components';

export const SliderCarrousel = styled.section`
  ${({ theme }) => css`
    height: 80%;
    background-color: ${theme.name === 'dark' ? theme.colors.blackColor : theme.colors.lightColor};
    border-radius: 10px;
    text-align: center;
    padding: 10px;

    h3, h2{
      color: ${theme.colors.secondaryColor};
      letter-spacing: ${theme.letterSpacings.thin};
      margin: 50px 0;
    }
    p{
      margin: 10px 0;
      text-align: justify;
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
${() => css`
  border-radius: 10px;
  background-color: white;

  height: 70px;
  padding: 5px 10px;

  margin-top: 30px;
  margin-bottom: 30px;

  img{
    margin-top: 10px;
    width: 50%;
  }
  `}
`;

export const SliderContainer = styled.article`
${() => css`
  `}
`;
