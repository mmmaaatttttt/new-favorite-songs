import React from 'react';
import { connect } from 'react-redux';
import RadialAxis from './RadialAxis';
import AngularAxis from './AngularAxis';

function mapStateToProps(state) {
  return {
    width: state.radialGraphWidth,
    height: state.radialGraphHeight
  }
}

const RadialGraph = ({trackKeys, width, height}) => (
  <svg
    width={width}
    height={height}
  >
    <RadialAxis/>
    <AngularAxis/>
  </svg>
);

export default connect(mapStateToProps, null)(RadialGraph);
