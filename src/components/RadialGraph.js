import React from 'react';
import { connect } from 'react-redux';
import RadialAxis from './RadialAxis';
import AngularAxis from './AngularAxis';
import RadialPolygon from './RadialPolygon';

function mapStateToProps(state) {
  return {
    width: state.radialGraphWidth,
    height: state.radialGraphHeight,
    trackAverages: state.trackAverages
  }
}

const RadialGraph = ({trackKeys, width, height, trackAverages}) => (
  <svg
    width={width}
    height={height}
  >
    <RadialAxis/>
    <AngularAxis/>
    <RadialPolygon data={trackAverages}/>
  </svg>
);

export default connect(mapStateToProps, null)(RadialGraph);
