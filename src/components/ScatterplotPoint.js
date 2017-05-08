import React from 'react';
import { connect } from 'react-redux';
import { dispatchCurrentTrack } from '../actions/tracks';

const ScatterplotPoint = ({track, x, y, r, fill, dispatchCurrentTrack}) => (
  <g>
    <defs>
      <pattern 
        id={track.id} 
        patternContentUnits="objectBoundingBox" 
        height="100%" 
        width="100%"
      >
        <image 
          preserveAspectRatio="none" 
          height="1" 
          width="1" 
          xlinkHref={track.album.images[0].url}
        ></image>
      </pattern>
    </defs>
    <circle 
      cx={x} 
      cy={y} 
      r={r}
      fill={`url(#${track.id}`}
      onMouseOver={(e) => dispatchCurrentTrack(e.pageX, e.pageY, track)}
      onMouseOut={(e) => dispatchCurrentTrack(e.pageX, e.pageY, null)}
    />
  </g>
);

export default connect(null, { dispatchCurrentTrack })(ScatterplotPoint);
