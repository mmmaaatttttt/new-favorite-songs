import React from 'react';
import GraphPoint from './GraphPoint'

const GraphPointWrapper = ({tracks}) => (
  <g>
    {tracks.map(item => (
      <GraphPoint 
        key={item.track.id}
        x={item.audio_features.danceability * 500}
        y={item.audio_features.energy * 500}
        url={item.track.album.images[0].url}
        r={5}
      />
    ))}
  </g>
);

export default GraphPointWrapper;
