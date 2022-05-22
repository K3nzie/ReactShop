import axios from 'axios';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL
} from '../constants/userConstants.js';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST
    });
    const config = {
      headers : {
        'Content-Type': 'application/json'
      }
    };

    const { data } = await axios.post('/api/users/login', { email, password }, config);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  }
  catch(error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      // Check for the the general error in the response but also check
      // for the custom error we created in our handler
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
