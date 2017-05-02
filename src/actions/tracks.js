import axios from 'axios';

const SPOTIFY_BASE_URL = 'https://api.spotify.com'

export const SET_CURRENT_USER_TRACKS = 'SET_CURRENT_USER_TRACKS';
export const SET_DISCOVER_WEEKLY_TRACKS = 'SET_DISCOVER_WEEKLY_TRACKS';

export function getCurrentUserTracks() {
  let tracks = [];
  return dispatch => {
    return axios.get(`${SPOTIFY_BASE_URL}/v1/me/tracks?limit=50`)
    .then(res => {
      tracks = res.data.items;
      let ids = tracks.map(item => item.track.id);
      return axios.get(`${SPOTIFY_BASE_URL}/v1/audio-features?ids=${ids}`);
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

export function getDiscoverWeeklyTracks(playlistId=null) {
  let weeklyTracks = [];
  return dispatch => {
    return getDiscoverWeeklyId()
    .then(res => {
      return axios.get(`${res.tracks.href}`);
    })
    .then(res => {
      weeklyTracks = res.data.items;
      let ids = weeklyTracks.map(item => item.track.id);
      return axios.get(`${SPOTIFY_BASE_URL}/v1/audio-features?ids=${ids}`);
    })
    .then(res => {
      weeklyTracks.forEach((track, i) => {
        track.audio_features = res.data.audio_features[i];
        track.discoverWeekly = true;
      });
      dispatch(setDiscoverWeeklyTracks(weeklyTracks))
    })
  }
}

export function setDiscoverWeeklyTracks(tracks) {
  return {
    type: SET_DISCOVER_WEEKLY_TRACKS,
    tracks
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

function getDiscoverWeeklyId() {
  let getter = function(data) {
    let discoverWeekly = data.items.find(playlist => (
      playlist.name === "Discover Weekly")
    )
    return discoverWeekly || axios.get(data.next).then(function(res) {
      return getter(res.data)
    })
  }

  return getter({
    next: `${SPOTIFY_BASE_URL}/v1/me/playlists`,
    items: []
  });
}