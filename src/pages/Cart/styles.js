import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 12px 15px 20px rgb(0 0 0 / 16%);

  div {
    margin-top: 20px;
    b {
        background-color: #c7ffa6;
      border-radius: 50px;
      padding: 10px;
      margin: 0px 0px 0px 0px;
      color: #217a01;
      }
  }

  @media(max-width: 420px) {
    div {
    
      b {
        display: flex;
        text-align: center;
      }
    }




  } 

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;


    button {
      background: linear-gradient(to right, #8e2de2, #4a00e0);
      color:#fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
     

     
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  caption {
    span {
      border-bottom: 1px solid #000;
      margin: 0px -30px 0px -30px;
    }
  }

  @media(max-width: 770px) {

    caption {
      span {
        
        margin: 0px;
      }
    }
  }



  

  @media(max-width: 420px) {

    caption {
      span {
        border-bottom: none;
        margin: 0px;
      }
    }



    }  


  

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }



  @media(max-width: 420px) {

    tbody tr td img {
      height: 45px;
    }


  }  

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }

    button {
      background: none;
      border: 0;
      padding: 6px;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }

`;
