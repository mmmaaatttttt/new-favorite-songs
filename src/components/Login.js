import React from 'react';
import { BASE_URL } from '../actions/auth';
import { connect } from 'react-redux';
import { mapStateToUserProps } from '../helpers/connectHelpers'

const Login = props => (
  <div>
    <a href={`${BASE_URL}/login`}>Log in with Spotify</a>
    <p>
      {props.loginError}
    </p>
  </div>
)

export default connect(mapStateToUserProps, null)(Login);
