import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './Login.css';
import { mapStateForAuth } from '../helpers/connectHelpers'
import { login, catchLoginErr } from '../actions/auth';
import { connect } from 'react-redux';
import 'url-search-params-polyfill';
import background from '../background.jpg';

class Auth extends Component {

  componentWillMount() {
    let params = new URLSearchParams(this.props.location.search)
    this.props.login({code: params.get('code')})
  }

  render() {
    let redirectUrl = this.props.username ? `/users/${this.props.username}` : '/'  
    return (
      <div>
        <div id="main-image">
          <img src={background} alt="Login page background"/>
        </div>
        <div id="content">
          {
            this.props.username ? 
            <Redirect to={redirectUrl}/> : 
            <div>
              <div>
                <i className="fa fa-5x fa-spinner fa-spin" aria-hidden="true"></i>
              </div>
              <p>Please stand by...</p>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default connect(mapStateForAuth, { login, catchLoginErr })(Auth);
