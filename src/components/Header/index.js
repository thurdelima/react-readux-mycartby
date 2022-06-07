import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';


import emojiShy from '../../assets/images/emoji-shy.png';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Link to="/">
        <h1>MYCARTBY</h1>
         <img src={emojiShy} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} Itens</span>
        </div>
        <MdShoppingBasket size={36} color="#000" />
      </Cart>
    </Container>
  );
}
