import * as d3 from 'd3';
import { trackKeys } from './axisHelpers';

export function normalizeFavoriteData(tracks) {
  return trackKeys.reduce(function(prev, cur) {
    return {...prev, [cur]: scaleData(tracks, cur)}
  }, {});
}

function scaleData(tracks, key) {
  let rawData = tracks.map(t => t.audio_features[key]);
  let min = d3.min(rawData);
  let max = d3.max(rawData);
  let scale = d3.scaleLinear()
                .domain([min, max])
                .range([0, 1]);
  return rawData.map(d => scale(d));
}