import axios from 'axios';

const SPOTIFY_BASE_URL = 'https://api.spotify.com'

export const SET_CURRENT_USER_TRACKS = 'SET_CURRENT_USER_TRACKS';

export function getCurrentUserTracks() {
  return dispatch => {
    return axios.get(`${SPOTIFY_BASE_URL}/v1/me/tracks?limit=50`)
    .then(res => {
      dispatch(setCurrentUserTracks(res.data.items));
    })
    .catch(err => console.log(err));
  }
}

export function setCurrentUserTracks(tracks) {
  return {
    type: SET_CURRENT_USER_TRACKS,
    tracks
  }
}