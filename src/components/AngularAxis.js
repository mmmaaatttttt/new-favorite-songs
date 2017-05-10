import React from 'react';
import { connect } from 'react-redux';
import { axisFormat, getAngle } from '../helpers/axisHelpers';

function mapStateToProps(state) {
  return {
    trackKeys: state.trackKeys,
    width: state.radialGraphWidth,
    height: state.radialGraphHeight
  }
}

const RadialAxis = ({trackKeys, width, height}) => {
  let lines = trackKeys.map((feature,i) => {
    let angle = getAngle(i / trackKeys.length);
    let x = width / 2 + 0.8 * width / 2 * Math.cos(angle);
    let y = height / 2 + 0.8 * height / 2 * Math.sin(angle);
    return (
      <g key={i}>
        <line 
          x1={width / 2}
          y1={height / 2}
          x2={x}
          y2={y}
        />
        <text 
          x={x} 
          y={y}
          alignmentBaseline="central"
          textAnchor="middle"
          fill="black"
          stroke="none"
        >
          {axisFormat(feature)}
        </text>
      </g>
    );
  });
  return (
    <g
      fill="none"
      stroke="#CCC"
    >
      {lines}
    </g>
  );
};

export default connect(mapStateToProps, null)(RadialAxis);
