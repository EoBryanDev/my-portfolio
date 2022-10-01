import styled, { css } from 'styled-components';

export const SliderCarrousel = styled.section`
  ${({ theme }) => css`
    height: 80%;
    background-color: ${theme.colors.lightColor};
    border-radius: 10px;
    text-align: center;
    padding: 10px;
  `}

  p{
    margin: 10px 0;
  }
  h3{
    margin: 50px 0;
  }

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
  border-radius:50%;
  margin-top: 30px;
  margin-bottom: 30px;

  `}

  img{
    width: 80%;
  }

`;
export const TechSlider = styled.div`
${() => css`
  background-color: white;

  height: 100%;
  margin-top: 30px;
  margin-bottom: 30px;

  img{
    width: 20%;
  }
  `}
`;

export const SliderContainer = styled.article`
${() => css`
  `}
`;
