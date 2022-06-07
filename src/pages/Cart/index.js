import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

import * as CartActions from '../../store/modules/cart/actions';

import {  formatVal, formatValToInt } from '../../util/format';

export default function Cart() {
  const total = useSelector(state =>
    formatVal(
      state.cart.reduce((totalSum, product) => {
       
        return totalSum + product.product.price * product.amount;
      }, 0)
    )
  );

  const totalValid = useSelector(state =>
    formatValToInt(
      state.cart.reduce((totalSum, product) => {
       
        return totalSum + product.product.price * product.amount;
      }, 0)
    )
  );

  const cart = useSelector(state =>
    
    state.cart.map(product => ({
      ...product,
      subtotal: formatVal(product.product.price * product.product.quantity),
      //price: formatVal(product.price),
    }))
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      <ProductTable>
      <caption><span>Meu carrinho</span></caption>
        <thead>
        
          <tr>
            <th />
            <th>PRODUTO</th>
            
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr>
              <td>
                <img src={product.product.imageUrl} alt={product.product.name} />
              </td>
              <td>
                <strong>{product.product.name}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() =>
                    dispatch(CartActions.removeFromCart(product.id))
                  }
                >
                  <MdDelete size={20} color="#8e2de2" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        
      </ProductTable>
      <div>
        {totalValid > 10 && 
        <b>Parabéns, sua compra tem frete grátis 😎</b>
      }
      </div>
     
      <footer>
      
         
        <button type="button">Finalizar pedido</button>

        

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}
