import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUserTracks, checkTrackStatus } from '../actions/tracks';
import Graph from './Graph';
import AxisSelect from './AxisSelect';

function mapStateToUserProps(state) {
  return {
    username: state.currentUser,
    tracks: state.tracks
  }
}

class Home extends Component {

  componentWillMount() {
    if (!checkTrackStatus()) this.props.getCurrentUserTracks();
  }

  render() {
    return (
      <div> 
        <h1>Hello {this.props.username}!</h1>
        <div>
          <AxisSelect axis="x"/>
          <AxisSelect axis="y"/>
        </div>
        <Graph />
      </div>
    )
  }
}

export default connect(mapStateToUserProps, { getCurrentUserTracks })(Home);

// next steps:
// add ability to update axis values; options: 
  // - danceability
  // - energy
  // - key
  // - loudness
  // - mode
  // - speechiness
  // - acousticness
  // - instrumentalness
  // - liveness
  // - valence
  // - tempo
  // - duration (ms)
  // - time signature
// add ability to get new data to plot and compare - find closest new song
// style!