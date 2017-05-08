import { 
  SET_CURRENT_USER, 
  SET_LOGIN_ERROR,
  setAuthorizationToken 
} from '../actions/auth';
import { 
  SET_CURRENT_USER_TRACKS,
  SET_DISCOVER_WEEKLY_TRACKS,
  SET_CURRENT_TRACK
} from '../actions/tracks';
import { SET_AXIS_LABEL } from '../actions/graph';

const DEFAULT_STATE = {
  currentUser: '',
  loginError: '',
  tracks: [],
  discoverWeeklyTracks: [],
  graphWidth: 600,
  graphHeight: 500,
  graphPadding: {
    top: 50,
    left: 80,
    right: 20,
    bottom: 50
  },
  xAxisLabel: 'danceability',
  yAxisLabel: 'energy',
  tooltipX: 0,
  tooltipY: 0,
  currentTrack: null
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return Object.keys(action).length > 1 ? { 
        ...state, 
        currentUser: action.username,
        token: action.token,
        refreshToken: action.refreshToken,
        loginError: null
      } : {};
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
    case SET_CURRENT_TRACK:
      return {
        ...state,
        tooltipX: action.x,
        tooltipY: action.y,
        currentTrack: action.track
      }
    case SET_DISCOVER_WEEKLY_TRACKS:
      return {
        ...state,
        discoverWeeklyTracks: action.tracks
      }
    case SET_AXIS_LABEL: 
      return {
        ...state,
        [action.axis]: action.newLabel
      };
    case 'persist/REHYDRATE':
      setAuthorizationToken(action.payload.token);
      return Object.assign({}, state, action.payload)
    default:
      return state;
  }
}