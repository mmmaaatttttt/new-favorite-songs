import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    width: state.radialGraphWidth,
    height: state.radialGraphHeight
  }
}

const RadialAxis = ({width, height}) => {
  let circles = [1, 2, 3, 4, 5].map((num,i,nums) => (
    <circle 
      key={i}
      cx={width/2}
      cy={height/2}
      r={0.8 * num / nums.length * width / 2}
    />
  ))
  return (
    <g
      fill="none"
      stroke="#CCC"
    >
      {circles}
    </g>
  );
};

export default connect(mapStateToProps, null)(RadialAxis);
