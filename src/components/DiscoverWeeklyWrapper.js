import React from 'react';
import { connect } from 'react-redux';
import { getDiscoverWeeklyTracks } from '../actions/tracks';
import DiscoverWeeklyTrack from './DiscoverWeeklyTrack';

function mapStateToProps(state) {
  return {
    tracks: state.tracks,
    discoverWeeklyTracks: state.discoverWeeklyTracks
  }
}

const DiscoverWeeklyWrapper = ({tracks, discoverWeeklyTracks, getDiscoverWeeklyTracks}) => (
  discoverWeeklyTracks.length ? 
  <div style={{display: 'block'}}>
    {discoverWeeklyTracks.map(item => (
      <DiscoverWeeklyTrack item={item} key={item.track.id}/>
    ))}
  </div> : 
  <div>
    <p>Want to see how your the tracks in your Discover Weekly playlist compare?</p>
    <p>Click the button below to graph them and rank them by how similar they are to what you already like.</p>
    <button 
      onClick={getDiscoverWeeklyTracks.bind(this, tracks)}
    >
      <i className="fa fa-music" aria-hidden="true"></i>
      Get Discover Weekly Tracks 
    </button>
  </div>
);

export default connect(mapStateToProps, { getDiscoverWeeklyTracks })(DiscoverWeeklyWrapper);
