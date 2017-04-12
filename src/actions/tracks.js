import axios from 'axios';

const SPOTIFY_BASE_URL = 'https://api.spotify.com'

export const SET_CURRENT_USER_TRACKS = 'SET_CURRENT_USER_TRACKS';

export function getCurrentUserTracks() {
  let tracks = [];
  return dispatch => {
    return axios.get(`${SPOTIFY_BASE_URL}/v1/me/tracks?limit=50`)
    .then(res => {
      tracks = res.data.items;
      let ids = tracks.map(item => item.track.id)
      return axios.get(`${SPOTIFY_BASE_URL}/v1/audio-features?ids=${ids}`)
    })
    .then(res => {
      tracks.forEach((track, i) => {
        track.audio_features = res.data.audio_features[i];
      });
      dispatch(setCurrentUserTracks(tracks));
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

export function checkTrackStatus() {
  var tracks = JSON.parse(localStorage.getItem('reduxPersist:tracks'))
  return tracks && tracks.length > 0;
}