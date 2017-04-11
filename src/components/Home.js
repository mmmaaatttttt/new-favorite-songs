import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUserTracks } from '../actions/tracks';

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
      <h1>Hello {this.props.username}!</h1>
    )
  }
}

export default connect(mapStateToUserProps, { getCurrentUserTracks })(Home);