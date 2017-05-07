import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'font-awesome/css/font-awesome.css';
import './index.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import rootReducer from './reducers/rootReducer';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
    autoRehydrate()
  )
);

class AppProvider extends Component {
  constructor() {
    super();
    this.state = { rehydrated: false };
  }

  componentWillMount() {
    persistStore(store, {}, () => {
      this.setState({ rehydrated: true });
    });
  }

  render() {
    if (!this.state.rehydrated) return null
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    )
  }
}

ReactDOM.render(
  <AppProvider />,
  document.getElementById('root')
);
