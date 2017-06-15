import React from 'react';
import { connect } from 'react-redux';
import './DiscoverWeeklyTrack.css';

const DiscoverWeeklyTrack = ({item}) => (
  <div className="dw-track">
    <div className="flex-container">
      <img src={item.track.album.images[0].url} alt="Discover Weekly album" />
      <div className="track-details">
        <p className="score">{Math.round(item.rating)}</p>
      </div>
    </div>
  </div>
);

export default connect(null, null)(DiscoverWeeklyTrack);
