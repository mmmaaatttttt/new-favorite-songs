import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import './Navbar.css';

const Navbar = ({logout}) => {
  return (
    <div className="Navbar">
      <h2>
        <i className="fa fa-arrow-circle-o-up" aria-hidden="true"></i>
        Tune Up
      </h2>
      <div>
        <button onClick={logout} >
          <i className="fa fa-sign-out" aria-hidden="true"></i>
          Log out
        </button>
      </div>
    </div>
  )
}

export default connect(null, { logout })(Navbar);
