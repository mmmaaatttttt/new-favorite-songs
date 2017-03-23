import { SET_CURRENT_USER } from '../actions/auth.js'

const DEFAULT_STATE = {
  isAuthenticated: false
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: Object.keys(action.user).length !== 0,
      };
    default:
      return state;
  }
}