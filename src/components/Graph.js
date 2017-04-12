import React from 'react';
import GraphPointWrapper from './GraphPointWrapper';

const Graph = ({tracks}) => (
  <svg 
    width="500"
    height="500">
    <GraphPointWrapper tracks={tracks}/>
  </svg>
);

export default Graph;
