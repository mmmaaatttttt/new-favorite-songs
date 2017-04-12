import React from 'react';

const GraphPoint = ({x, y, r, url}) => (
  <circle cx={x} cy={y} r={r} />
);

export default GraphPoint;
