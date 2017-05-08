import React from 'react';
import { connect } from 'react-redux';
import ScatterplotPoint from './ScatterplotPoint';

function mapStateToProps(state) {
  return {
    tracks: state.tracks.concat(state.discoverWeeklyTracks)
  }
}

const ScatterplotPointWrapper = ({tracks, xDataLabel, yDataLabel, xScale, yScale}) => (
  <g>
    {tracks.map(item => (
      <ScatterplotPoint 
        key={item.track.id}
        track={item.track}
        x={xScale(item.audio_features[xDataLabel])}
        y={yScale(item.audio_features[yDataLabel])}
        fill={item.discoverWeekly ? "#FF0000" : "#000000"}
        r={15}
      />
    ))}
  </g>
);

export default connect(mapStateToProps, null)(ScatterplotPointWrapper);
