export const trackKeys = [
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
];

export function axisFormat(str) {
  var main = str.split("_")[0]
  return main[0].toUpperCase() + main.slice(1);
}
