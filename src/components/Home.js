import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUserTracks } from '../actions/tracks';
import Graph from './Graph';

function mapStateToUserProps(state) {
  return {
    username: state.currentUser,
    tracks: state.tracks
  }
}

class Home extends Component {

  componentWillMount() {
    this.props.getCurrentUserTracks();
  }

  render() {
    return (
      <div> 
        <h1>Hello {this.props.username}!</h1>
        <Graph tracks={this.props.tracks} />
      </div>
    )
  }
}

export default connect(mapStateToUserProps, { getCurrentUserTracks })(Home);
