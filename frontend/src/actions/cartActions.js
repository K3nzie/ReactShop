import axios from 'axios';
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM
} from '../constants/cartConstants.js';

export const addToCart = (slug, qty) => async (dispatch, getState) => {
  const { data } = await axios.get('/api/products/' + slug);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty
    }
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
