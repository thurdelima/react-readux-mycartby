import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  
  
  a:link {
    text-decoration: none;
    display: flex;
    align-items: center;

    img {
    height: 50px;
    width: 50px;
  }
  }

  h1 {
    
    background: -webkit-linear-gradient( #8e2de2, #4a00e0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
 
  transition: opacity 0.2s;

  
  
  

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: black;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
