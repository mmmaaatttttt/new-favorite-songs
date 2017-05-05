import React from 'react';
import { BASE_URL } from '../actions/auth';
import { connect } from 'react-redux';
import { mapStateForAuth } from '../helpers/connectHelpers';
import background from '../background.jpg';
import './Login.css'

const Login = props => (
  <div>
    <div id="main-image">
      <img src={background} alt="Login page background"/>
    </div>
    <div id="content">
      <h1>
        <i className="fa fa-2x fa-arrow-circle-o-up" aria-hidden="true"></i>
        Tune Up
      </h1>
      <p>Visualize your most recent favorite Spotify tracks.</p>
      <p>Find new songs that you'll love.</p>
      <a href={`${BASE_URL}/login`} className="login">
        <i className="fa fa-3x fa-spotify" aria-hidden="true"></i>
        Log in with Spotify
      </a>
      <p>
        {props.loginError}
      </p>
    </div>
  </div>
)

export default connect(mapStateForAuth, null)(Login);
