import React from 'react';
import { connect } from 'react-redux';
import { setCurrentTrack } from '../actions/tracks';

const ScatterplotPoint = ({item, x, y, r, fill, setCurrentTrack}) => (
  <g>
    <defs>
      <pattern 
        id={item.track.id} 
        patternContentUnits="objectBoundingBox" 
        height="100%" 
        width="100%"
      >
        <image 
          preserveAspectRatio="none" 
          height="1" 
          width="1" 
          xlinkHref={item.track.album.images[0].url}
        ></image>
      </pattern>
    </defs>
    <circle 
      cx={x} 
      cy={y} 
      r={r}
      fill={`url(#${item.track.id}`}
      stroke={item.discoverWeekly ? '#1ed760' : '#000000'}
      strokeWidth='3px'
      onMouseMove={(e) => setCurrentTrack(e.pageX, e.pageY, item)}
      onMouseOut={(e) => setCurrentTrack(e.pageX, e.pageY, null)}
    />
  </g>
);

export default connect(null, { setCurrentTrack })(ScatterplotPoint);
