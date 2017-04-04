import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToUserProps } from '../helpers/connectHelpers';

class Home extends Component {
  render() {
    console.log(this.props)
    return (
      <h1>Hello {this.props.username}!</h1>
    )
  }
}

export default connect(mapStateToUserProps, null)(Home);