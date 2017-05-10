import React from 'react';
import { connect } from 'react-redux';
import { getAngle } from '../helpers/axisHelpers';
import * as d3 from 'd3';

function mapStateToProps(state, props) {
  return {
    width: state.radialGraphWidth,
    height: state.radialGraphHeight,
  }
}

const RadialPolygon = ({data, width, height}) => {
  const keys = Object.keys(data).sort();
  const path = d3.path();
  const min = -0.5;
  const max = 1.5;
  const scale = d3.scaleLinear()
                .domain([min, max])
                .range([0, 0.8 * width / 2]);
  keys.forEach(function(key, i) {
    const angle = getAngle(i / keys.length);
    const val = Math.max(min, Math.min(max, data[key]));
    const x = width / 2 + scale(val) * Math.cos(angle);
    const y = height / 2 + scale(val) * Math.sin(angle);
    if (i === 0) path.moveTo(x, y);
    path.lineTo(x, y);
  });
  path.closePath();
  return (
    <path d={path.toString()} fill="none" stroke="black" strokeWidth="3px" />
  );
};

export default connect(mapStateToProps, null)(RadialPolygon);
