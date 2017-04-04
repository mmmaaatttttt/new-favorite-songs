import axios from 'axios';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

export const BASE_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:5000';

export function setAuthorizationToken(token) {
  if (token) {
    axios.default.headers.common['Authorization'] = `Basic ${token}`
  } else {
    delete axios.default.headers.common['Authorization']
  }
}
 
export function login(code) {
  return dispatch => {
    return axios.post(`${BASE_URL}/authenticate`, code)
    .then(res => {
      let data = {
        accessToken: res.data.accessToken,
        refreshToken: res.data.refreshToken,
        username: res.data.username
      };
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      dispatch(setCurrentUser(data.username));
    })
    .catch(err => dispatch(setLoginError(err)));
  }
}

export function catchLoginErr(err) {
  return dispatch => {
    dispatch(setLoginError(err));
  }
}

export function setCurrentUser(username) {
  return {
    type: SET_CURRENT_USER,
    username
  }
}

export function setLoginError(errObj) {
  return {
    type: SET_LOGIN_ERROR,
    errObj
  }
}