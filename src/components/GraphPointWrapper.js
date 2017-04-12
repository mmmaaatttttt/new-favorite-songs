import React from 'react';
import GraphPoint from './GraphPoint'

const GraphPointWrapper = ({tracks, xDataLabel, yDataLabel, xScale, yScale}) => (
  <g>
    {tracks.map(item => (
      <GraphPoint 
        key={item.track.id}
        x={xScale(item.audio_features[xDataLabel])}
        y={yScale(item.audio_features[yDataLabel])}
        url={item.track.album.images[0].url}
        r={5}
      />
    ))}
  </g>
);

export default GraphPointWrapper;
