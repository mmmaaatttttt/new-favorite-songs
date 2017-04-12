import axios from 'axios';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

export const BASE_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:5000';

export function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete axios.default.headers.common['Authorization']
  }
}
 
export function login(code) {
  return dispatch => {
    return axios.post(`${BASE_URL}/authenticate`, code)
    .then(res => {
      setAuthorizationToken(res.data.access_token)
      localStorage.setItem('refreshToken', res.data.refresh_token);
      dispatch(setCurrentUser(res.data.display_name));
    })
    .catch(err => {
      var errObj = Object.keys(err).length ? err : null;
      dispatch(setLoginError(errObj));
    });
  }
}

export function catchLoginErr(err) {
  return dispatch => {
    dispatch(setLoginError(err));
  }
}

export function setCurrentUser(displayName) {
  return {
    type: SET_CURRENT_USER,
    displayName
  }
}

export function setLoginError(errObj) {
  return {
    type: SET_LOGIN_ERROR,
    errObj
  }
}