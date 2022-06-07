import { call, put, all, select,  takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';
import { formatPrice, formatVal } from '../../../util/format';

import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart( product ) {
  
  //console.log('product in addToCart: ', product.product);

  const productPure = product.product;
  const {price, quantity} = productPure;
 
  const stockAmount = quantity;
 

  let requestAmount = stockAmount;

  if (requestAmount > stockAmount) {
    toast.error('Quantidade solicitada fora do estoque');
    //console.tron.warn('ERRO');
    return;
  }

  
    const data = {
      ...product,
      amount: 1,
      priceFormatted: formatVal(price),
    };
    //console.log('data: ', data);

    yield put(addToCartSuccess(data));

    history.push('/cart');
 


}



export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart)

])
