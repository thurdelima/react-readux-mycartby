import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';
import { formatPrice, formatVal } from '../../util/format';
import { val } from '../../util/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

export default function Home() {
  const [products, setProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get();

      //console.log('response: ', response);

      const data = response.data.items.map(product => ({
        ...product,
        priceFormatted: formatVal(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(product) {
    //console.log('product: ', product);
    //const { addToCartRequest } = this.props;

    dispatch(CartActions.addToCartRequest(product));
  }

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.imageUrl} alt={product.name} />
          <strong>{product.name}</strong>
          <span>{product.priceFormatted}</span>

          <button type="button" onClick={() => handleAddProduct(product)}>
            

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
