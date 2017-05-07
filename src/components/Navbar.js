import React from 'react';
import { connect } from 'react-redux';
import './Navbar.css';
import { getDiscoverWeeklyTracks } from '../actions/tracks';
import { logout } from '../actions/auth';

function mapStateToProps(state) {
  return {
    tracks: state.tracks,
    discoverWeeklyTracks: state.discoverWeeklyTracks
  }
}

// 2. remove discover weekly button if discover weekly tracks are present

const Navbar = props => {
  let discoverButton = props.discoverWeeklyTracks.length === 0 ? (
    <button 
      onClick={props.getDiscoverWeeklyTracks.bind(
        this, props.tracks
      )}
    >
      <i className="fa fa-music" aria-hidden="true"></i>
      Get Discover Weekly Tracks 
    </button>
  ) : null;
  return (
    <div className="Navbar">
      <h2>
        <i className="fa fa-arrow-circle-o-up" aria-hidden="true"></i>
        Tune Up
      </h2>
      <div>
        { discoverButton }
        <button onClick={props.logout} >
          <i className="fa fa-sign-out" aria-hidden="true"></i>
          Log out
        </button>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, { 
  getDiscoverWeeklyTracks,
  logout
})(Navbar);
