import { 
  SET_CURRENT_USER, 
  SET_LOGIN_ERROR,
  setAuthorizationToken 
} from '../actions/auth';
import { 
  SET_CURRENT_USER_TRACKS,
  SET_DISCOVER_WEEKLY_TRACKS,
  SET_CURRENT_TRACK,
  SET_RADIAL_TRACK
} from '../actions/tracks';
import { SET_AXIS_LABEL } from '../actions/graph';

const DEFAULT_STATE = {
  currentTrack: null,
  currentUser: '',
  discoverWeeklyTracks: [],
  loginError: '',
  scatterplotWidth: 600,
  scatterplotHeight: 500,
  scatterplotPadding: {
    top: 50,
    left: 80,
    right: 20,
    bottom: 50
  },
  radialGraphWidth: 500,
  radialGraphHeight: 500,
  radialTrack: null,
  tooltipX: 0,
  tooltipY: 0,
  trackAverages: null,
  tracks: [],
  trackKeys: [
    'danceability',
    'energy',
    'loudness',
    'speechiness',
    'acousticness',
    'instrumentalness',
    'liveness',
    'valence',
    'tempo',
    'duration_ms',
  ],
  xAxisLabel: 'danceability',
  yAxisLabel: 'energy'
};

export default (state=DEFAULT_STATE, action={type: null}) => {
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
        tracks: action.tracks,
        trackAverages: action.trackAverages
      };
    case SET_CURRENT_TRACK:
      return {
        ...state,
        tooltipX: action.x,
        tooltipY: action.y,
        currentTrack: action.track
      }
    case SET_RADIAL_TRACK:
      return {
        ...state,
        radialTrack: action.radialTrack
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