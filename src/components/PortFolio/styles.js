import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    border-radius: 10px;
    text-align: center;
    padding: 20px;

    @media only screen and (min-width: ${theme.deviceSizes.tablet}){
      display:none;
    }

  `}
  p{
    margin: 10px 0;
    text-align: justify;
  }
  h3, h2{
    color: ${({ theme }) => (theme.name === 'dark' ? theme.colors.secondaryColor : theme.colors.lightColor)};
    text-shadow: ${({ theme }) => theme.colors.darkColor} 2px 3px 2px;
    letter-spacing: ${({ theme }) => theme.letterSpacings.thin};
    margin: 20px 0;
  }
`;
export const SliderContainer = styled.article`
  ${() => css`
    border-radius: 10px;
    height: 400px;
  `}
`;

export const Cover = styled.div`
  margin-top: 10px;
  display:flex;
  justify-content: center;
  position: relative;

  img{
    position: block;
    border-radius: 5px;
    width: 90%;
    filter: grayscale(1);
  }
  .title_overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.25s;
  }

  .title_overlay--blur {
    backdrop-filter: blur(5px);
  }
  .title_overlay:hover {
    opacity: 1;
  }

  .title_overlay > *{
    transform: translateY(-20px);
    transition: transform 0.25s;
  }

  .title_overlay:hover{
    transform: translateY(0);
  }

  img:hover{
    filter: grayscale(0);
  }
`;

export const ProjectNav = styled.div`
  padding: 0 10px;
  margin: 20px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img{
    width: 10%;
  }
`;
export const GridWrapper = styled.div`
display: none;

  ${({ theme }) => css`
    @media only screen and (min-width: ${theme.deviceSizes.tablet}){ //grid wrapper
      display: block;

      .grid-wrapper{
        padding: 10px;
        max-width: 1100px;
        margin: 0 auto;
        background: #f2f2f2;
        display: grid;
        grid-gap: 5px;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-auto-rows: 200px;
        grid-auto-flow: dense;
      }

      .tall{
        grid-row: span 2;
        background: gray;
        padding: 10px;
        border: 1px solid;
      }

      .wide{
        grid-column: span 2;
        background: yellow;
        padding: 10px;
        border: 1px solid;
      }
      .ultraWide {
        grid-column: span 3;
      }

       img{
        width: 100%;
        height: 100%;
        border-radius: 20px;
        object-fit: cover;
      }
    }

  `}

`;
