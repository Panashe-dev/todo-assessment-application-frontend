
import {USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL,USER_LOGOUT} from '../constants/userConstants';
import { postLoginApi, getUserInfoApi} from '../services/RestApiCalls';
import { getErrorMessage } from '../services/Utils';

export const login = (usernameOrEmail, password) => async (dispatch) => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST
      });
  
      
      const loginRequest = {
        "username": usernameOrEmail,
        "password": password
      };
  
      //Login
      const loginResponse = await postLoginApi(loginRequest);
  
      const userInfo = {
        token: loginResponse.jwtToken
      };
    
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
        
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: userInfo
      });
  
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: getErrorMessage(error)
      });
    }
  };

  export const logout = () => (dispatch) => {
    localStorage.clear();
    console.log('LOGOUT ACTION!!!');
    dispatch({
      type: USER_LOGOUT
    });
  };