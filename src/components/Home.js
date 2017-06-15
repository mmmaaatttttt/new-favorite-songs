import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { 
  getCurrentUserTracks, 
  checkTrackStatus
} from '../actions/tracks';
import Scatterplot from './Scatterplot';
import RadialGraph from './RadialGraph';
import AxisSelect from './AxisSelect';
import Navbar from './Navbar';
import Tooltip from './Tooltip';
import DiscoverWeeklyWrapper from './DiscoverWeeklyWrapper';
import './Home.css';

function mapStateToUserProps(state) {
  return {
    username: state.currentUser,
    tracks: state.tracks
  }
}

class Home extends Component {

  constructor(props) {
    super(props)
    this.isLoggedIn = this.isLoggedIn.bind(this);
  }

  componentWillMount() {
    if (!checkTrackStatus()) this.props.getCurrentUserTracks();
  }

  isLoggedIn() {
    return (
      localStorage.getItem('reduxPersist:currentUser') ||
      this.props.username
    );
  }

  render() {
    return (
      <div>
        {
          !this.isLoggedIn() ? 
          <Redirect to="/" /> : 
          <div>
            <Navbar />
            <h3>
              Welcome! Here's data on the {this.props.tracks.length} most recently saved 
              track{this.props.tracks.length !== 1 ? 's' : ''} for {this.props.username}.
            </h3>
            <div>
              <AxisSelect axis="x"/>
              <AxisSelect axis="y"/>
            </div>
            <div className="Home-row">
              <div className="col-40">
                <RadialGraph />
              </div>
              <div className="col-40">
                <Scatterplot />
                <Tooltip />
              </div>
              <div className="col-20">
                <DiscoverWeeklyWrapper />
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default connect(mapStateToUserProps, { getCurrentUserTracks })(Home);

// clicking on sidebar album sets state
// update styling for selects
// update layout
// error handling for now fave tracks or no spotify weekly
// remove button click, do both requests on login
  // - update radial graph design
// larger spread of values for recommendations?
// stateless functional components