import React from 'react';
import { connect } from 'react-redux';
import RadialAxis from './RadialAxis';
import AngularAxis from './AngularAxis';
import RadialPolygon from './RadialPolygon';
import { normalizeData } from '../helpers/numericHelpers';

function mapStateToProps(state) {
  return {
    width: state.radialGraphWidth,
    height: state.radialGraphHeight,
    trackAverages: state.trackAverages,
    radialTrack: state.radialTrack,
    trackKeys: state.trackKeys,
    tracks: state.tracks
  }
}

const RadialGraph = ({trackKeys, width, height, trackAverages, radialTrack, tracks}) => {
  let radialTrackPolygon = null;
  if (radialTrack) {
    const normalData = normalizeData(tracks, [radialTrack]);
    const data = trackKeys.reduce((obj, key) => (
      {...obj, [key]: normalData[key][0]}
    ), {});
    radialTrackPolygon = <RadialPolygon data={data} stroke="#6207e3"/>
  }

  return (
    <svg
      width={width}
      height={height}
    >
      <RadialAxis/>
      <AngularAxis/>
      <RadialPolygon data={trackAverages} stroke="black" />
      {radialTrackPolygon}
    </svg>
  );
}

export default connect(mapStateToProps, null)(RadialGraph);
