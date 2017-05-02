import React from 'react';

const GraphPoint = ({x, y, r, url, fill}) => (
  <circle 
    cx={x} 
    cy={y} 
    r={r}
    fill={fill}
  />
);

export default GraphPoint;
