import styled from 'styled-components';

export const Container = styled.body`

  max-width: 100vw;
  max-height: 100vh;
  margin: -8px;
  padding: 0;
  box-sizing: border-box;
  overflow-Y: hidden;
  color: white;
  background: url('https://img.freepik.com/free-vector/realistic-galaxy-background_23-2148991322.jpg?w=1380&t=st=1666995281~exp=1666995881~hmac=be3b4bf2610a50005600e1bdcb6390e88cb40bf50ad43f1ff740450e76ac50ba') no-repeat;
  display:flex;
  align-items:center;
  justify-content: center;
  background-position: 30% 45%;
  background-size: cover;
  overflow: hidden;

  a, :active, :visited{
    color:inherit;
    text-decoration:none;
  }


  .astronault{
  width:70%;
  -webkit-animation: spin 20s infinite;
  animation: spin 20s infinite alternate;
  margin-left:auto;
  }
  @keyframes spin{
    0%{
      transform: rotate(45deg) translateX(5%) translateY(5%);
    }
    100%{
      width: 0%;
      transform: rotate(1440deg) translateX(100%) translateY(-5%);
    }
  }

`;

export const Content = styled.div`

  width: 80%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items:center;
`;
export const Column = styled.div`

  width: 100%;
  height: 80vh;


`;
export const TextColumn = styled.div`
  font-family: Roboto;
  display: flex;
  height:100%;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background: rgba(255,255,255,0.2);
  border-radius:50px;



`;
export const Title = styled.div`
  font-size: 70px;;

`;
export const Subtitle = styled.div`
  font-size: 40px;

`;
export const Button = styled.div`
display:flex;
color: #000;
align-items: center;
justify-content: center;
background: #3CFF4F;
width: 320px;
height: 80px;
border-radius: 20px;
font-size: 1.5em;

&:hover{
  color: #3CFF4F;
  background: #000;
  cursor: pointer;
}

`;
