import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Login from './Login';
import Auth from './Auth';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/callback" location={location} component={Auth}/>
          <Route path="/users/:username" component={Home}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
