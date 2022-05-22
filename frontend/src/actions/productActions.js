import axios from 'axios';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL
} from '../constants/productConstants.js';

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST,  });
    const { data } = await axios.get('/api/products')
      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data
      })
  } catch(error) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        // Check for the the general error in the response but also check
        // for the custom error we created in our handler
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
      })
  }
};


export const listProductDetails = (slug) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST  });
    const { data } = await axios.get('/api/products/' + slug)
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data
      })
  } catch(error) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        // Check for the the general error in the response but also check
        // for the custom error we created in our handler
        payload: error.response && error.response.data.message ? error.response.data.message : error.message
      })
  }
};
