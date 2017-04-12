import { SET_CURRENT_USER, SET_LOGIN_ERROR } from '../actions/auth.js';
import { SET_CURRENT_USER_TRACKS } from '../actions/tracks.js';

const DEFAULT_STATE = {
  currentUser: '',
  loginError: '',
  tracks: []
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { 
        ...state, 
        currentUser: action.displayName,
        loginError: null
      };
    case SET_LOGIN_ERROR:
      return {
        ...state,
        loginError: action.errObj 
      };
    case SET_CURRENT_USER_TRACKS: 
      return {
        ...state, 
        tracks: action.tracks 
      };
    case 'persist/REHYDRATE':
      return Object.assign({}, state, action.payload)
    default:
      return state;
  }
}