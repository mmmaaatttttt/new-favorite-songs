import React from 'react';
import { connect } from 'react-redux';
import './Tooltip.css';

function mapStateToProps(state) {
  return {
    x: state.tooltipX,
    y: state.tooltipY,
    track: state.currentTrack
  }
}

const Tooltip = ({x, y, track}) => (track ? 
    <div>
      <h1>Hey y'all!</h1>
    </div>
    : null
);

export default connect(mapStateToProps, null)(Tooltip);
