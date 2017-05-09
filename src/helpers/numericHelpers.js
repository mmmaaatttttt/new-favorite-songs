import * as d3 from 'd3';
import rootReducer from '../reducers/rootReducer';

export function getRatings(faves, weeklies) {
  const allTracks = faves.concat(weeklies);
  const normalFavorites = normalizeData(allTracks, faves);
  const normalWeeklies = normalizeData(allTracks, weeklies);
  const distances = averageDistance(normalFavorites, normalWeeklies);
  const attributeCount = Object.keys(normalFavorites).length
  return distancesToRatings(distances, attributeCount);
}

const audioData = (tracks, key) => tracks.map(t => t.audio_features[key]);

function scale(tracks, key) {
  const rawData = audioData(tracks, key);
  const min = d3.min(rawData);
  const max = d3.max(rawData);
  return d3.scaleLinear()
            .domain([min, max])
            .range([0, 1]);
}

function normalizeData(normalSet, targetSet) {
  return rootReducer().trackKeys.reduce(function(prev, cur) {
    const keyScale = scale(normalSet, cur);
    const scaledData = audioData(targetSet, cur).map(d => keyScale(d));
    return {...prev, [cur]: scaledData}
  }, {});
}

function averageDistance(normalizedFaves, normalizedWeeklies) {
  const keys = Object.keys(normalizedFaves);
  const distances = [];
  const weeklyCount = normalizedWeeklies[keys[0]].length;
  const faveCount = normalizedFaves[keys[0]].length;
  for (let i = 0; i < weeklyCount; i++) {
    const currentWeekly = getNormalizedTrack(normalizedWeeklies, i);
    let totalDistance = 0;
    for (let j = 0; j < faveCount; j++) {
      const currentFave = getNormalizedTrack(normalizedFaves, j);
      const distance = euclideanDistance(currentWeekly, currentFave);
      totalDistance += distance / faveCount;
    }
    distances.push(totalDistance);
  }
  return distances;
}

function getNormalizedTrack(normData, idx) {
  return rootReducer().trackKeys.reduce((obj, key) => (
    {
      ...obj,
      [key]: normData[key][idx]
    }
  ), {});
}

function euclideanDistance(obj1, obj2) {
  let distanceSq = 0;
  for (let key in obj1) {
    distanceSq += (obj1[key] - obj2[key]) ** 2;
  }
  return Math.sqrt(distanceSq);
}

function distancesToRatings(distances, max) {
  const scale = d3.scaleLog()
                  .domain([1, max + 1])
                  .range([100,0]);
  return distances.map(d => scale(d + 1));
}
