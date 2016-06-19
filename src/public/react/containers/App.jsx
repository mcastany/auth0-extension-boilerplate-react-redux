import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Extension from './Extension';
import rootReducer from '../reducers';
import * as Constants from '../constants';

let store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Extension />
      </Provider>
    );
  }
};

export default App;