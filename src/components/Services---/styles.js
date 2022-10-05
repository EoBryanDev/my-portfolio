import styled, { css } from 'styled-components';

export const BackgroundSlider = styled.section`
  ${({ theme }) => css`
    height: 80%;
    background-color: ${theme.colors.secondaryColor};
    border-radius: 10px;
    text-align: center;
    padding: 10px;
  `}
  p{
    margin: 10px 0;
    text-align: justify;
  }
  h3, h2{
    color: ${({ theme }) => theme.colors.secondaryColor};
    letter-spacing: ${({ theme }) => theme.letterSpacings.thin};
    margin: 50px 0;
  }
`;

export const ServiceImg = styled.div`
  ${({ theme }) => css`
  margin:0 auto;
  display: flex;
  align-items:center;
  justify-content:center;
  height: 120px;
  width: 120px;
  background-color: ${theme.colors.whiteColor};
  border-radius:50%;
  margin-top: 10px;
  margin-bottom: 30px;
  padding: 30px 0;


  `}

  img{
    width: 100%;
  }

`;

export const BackgroundServices = styled.ul`
  ${({ theme }) => css`
    background-color: ${theme.colors.whiteColor};
    height: 260px;
    margin: 0 10px;
    padding: 30px 0px;
    border-radius: 10px;

    & li{
      list-style: none;
    }
  `}

`;
