import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    width: state.radialGraphWidth,
    height: state.radialGraphHeight
  }
}

const RadialAxis = ({width, height}) => {
  let circles = [1, 2, 3, 4, 5, 6, 7, 8].map((num,i,nums) => (
    <circle 
      key={i}
      cx={width/2}
      cy={height/2}
      r={0.8 * num / nums.length * width / 2}
      stroke={num === 2 || num === 6 ? "#1ed760" : "#cccccc"}
    />
  ))
  return (
    <g
      fill="none"
    >
      {circles}
    </g>
  );
};

export default connect(mapStateToProps, null)(RadialAxis);
