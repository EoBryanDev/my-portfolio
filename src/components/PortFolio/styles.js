import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    height: 300px;
    background-color: ${theme.colors.lightColor};
    border-radius: 10px;
    text-align: center;
    padding: 20px;
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
export const SliderContainer = styled.article`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkColor};
    height: 200px;
    border-radius: 10px;
  `}
`;
export const Cover = styled.div`
  margin-top: 10px;
  display:flex;
  justify-content: center;
  img{
    border-radius: 5px;
    width: 90%;
    filter: grayscale(1);
  }
  img:hover{
    filter: grayscale(0);
  }
`;
export const ProjectNav = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img{
    width: 25%;
  }
  button{
    border: none;
    border-radius: 10px;
    width: 50px;
    height: 40px;
  }
`;
