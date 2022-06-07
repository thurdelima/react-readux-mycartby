import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  @media(max-width: 770px) {
    grid-template-columns: repeat(2, 1fr);

      
    }
  
  @media(max-width: 600px) {

    grid-template-columns: repeat(2, 1fr);



    }

    


    @media(max-width: 420px) {

      grid-template-columns: repeat(1, 1fr);



      }  

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;

    }

    button {
      background: linear-gradient(to right, #8e2de2, #4a00e0);
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      height: 45px;
      display: flex;
      align-items: center;
      


      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }

`;
