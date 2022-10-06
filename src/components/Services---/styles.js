import styled, { css } from 'styled-components';

export const BackgroundSlider = styled.section`
  ${({ theme }) => css`
    height: 85%;
    background-color: ${theme.colors.secondaryColor};
    border-radius: 10px;
    text-align: center;
    padding: 10px;
    margin-top: 20px;
  `}
  p{
    margin: 10px 0;
    text-align: justify;
  }
  h2 {
    margin: 50px 0;
  }
  h2, h3{
    color: ${({ theme }) => theme.colors.darkColor};
    letter-spacing: ${({ theme }) => theme.letterSpacings.thin};
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
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 10px 0;


  `}

  img{
    width: 70%;
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
      margin-bottom: 20px;
      padding: 5px;
    }
  `}

`;
