import React, { Component } from 'react';
import { connect } from 'react-redux';
import { axisFormat } from '../helpers/axisHelpers';
import './Tooltip.css';

function mapStateToProps(state) {
  return {
    x: state.tooltipX,
    y: state.tooltipY,
    item: state.currentTrack,
    xAxisLabel: state.xAxisLabel,
    yAxisLabel: state.yAxisLabel
  }
}

const Tooltip = ({x, y, item, xAxisLabel, yAxisLabel}) => {
  let height = 150;
  return (item ? 
    <div 
      className="Tooltip" 
      style={
        {
          top: y - height / 2, 
          right: window.innerWidth - x + 15,
          height
        }
      }
    >
      <img 
        src={item.track.album.images[0].url} 
        alt={`${item.track.name} cover`}
        style={{height}}
      />
      <div className="track-data">
        <p>Title: {item.track.name}</p>
        <p>Artist: {item.track.artists[0].name}</p>
        <p>{axisFormat(xAxisLabel)}: {item.audio_features[xAxisLabel]}</p>
        <p>{axisFormat(yAxisLabel)}: {item.audio_features[yAxisLabel]}</p>
      </div>
    </div>
    : null
  );
};

export default connect(mapStateToProps, null)(Tooltip);
