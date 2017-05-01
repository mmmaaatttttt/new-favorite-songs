import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { mapStateForAuth } from '../helpers/connectHelpers'
import { login, catchLoginErr } from '../actions/auth';
import { connect } from 'react-redux';
import 'url-search-params-polyfill';

class Auth extends Component {

  componentWillMount() {
    let params = new URLSearchParams(this.props.location.search)
    this.props.login({code: params.get('code')})
  }

  render() {
    let redirectUrl = this.props.username ? `/users/${this.props.username}` : '/'  
    return (
      <div>
        {
          this.props.username ? 
          <Redirect to={redirectUrl}/> : 
          <p>Please stand by...</p>
        }
      </div>
    )
  }
}

export default connect(mapStateForAuth, { login, catchLoginErr })(Auth);
