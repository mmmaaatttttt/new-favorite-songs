import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUserTracks, checkTrackStatus } from '../actions/tracks';
import Graph from './Graph';

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
        <Graph 
          tracks={this.props.tracks} 
          width={500}
          height={500}
          xDataLabel={'danceability'}
          yDataLabel={'energy'}
        />
      </div>
    )
  }
}

export default connect(mapStateToUserProps, { getCurrentUserTracks })(Home);

// next steps:
// add axes & gridlines
// add ability to update axis values
// add ability to get new data to plot and compare - find closest new song
// style!