import React from 'react';
import { connect } from 'react-redux';
import { setCurrentTrack, setRadialTrack } from '../actions/tracks';

function mapStateToProps(state) {
  return {
    radialTrack: state.radialTrack
  }
}

const ScatterplotPoint = ({item, x, y, r, fill, setCurrentTrack, setRadialTrack, radialTrack}) => {
  function shouldRadialGraphUpdate() {
    if (radialTrack && radialTrack.track.id === item.track.id) {
      setRadialTrack(null);
    } else {
      setRadialTrack(item);
    }
  }

  let strokeColor = '#000000';
  let strokeWidth = '3px';
  if (item.discoverWeekly) strokeColor = '#1ed760';
  if (radialTrack && item.track.id === radialTrack.track.id) {
    strokeColor = '#6207e3';
    strokeWidth = '5px';
  }

  return (
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
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        onMouseMove={(e) => setCurrentTrack(e.pageX, e.pageY, item)}
        onMouseOut={(e) => setCurrentTrack(e.pageX, e.pageY, null)}
        onClick={shouldRadialGraphUpdate}
      />
    </g>
  )
};

export default connect(mapStateToProps, { 
  setCurrentTrack,
  setRadialTrack
})(ScatterplotPoint);
