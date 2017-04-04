import { SET_CURRENT_USER, SET_LOGIN_ERROR } from '../actions/auth.js'

const DEFAULT_STATE = {
  currentUser: '',
  loginError: ''
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        currentUser: action.username,
        loginError: null
      };
    case SET_LOGIN_ERROR:
      return {
        loginError: action.errObj
      };
    default:
      return state;
  }
}