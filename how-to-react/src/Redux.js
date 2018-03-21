// library dependencies
import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import { Provider } from 'react-redux';

// component dependencies
import App from './App.js';

// root reducers and logic
import { default as rootReducer } from './RootReducer';
import { default as rootLogic } from './RootLogic';

const initialState = {
  Data: {
    movies: null,
    imageUrl: null,
    loading: false,
    loaded: false,
    error: false
  }
}

const logicDependencies = {};

const configureStore = () => {
  const logicMiddleware = createLogicMiddleware(rootLogic, logicDependencies); // create logic middleware
  const middleware = applyMiddleware(logicMiddleware); // apply middleware to redux dispatch
  return createStore(rootReducer, initialState, middleware); // create the store
}

class Redux extends Component {
  constructor(props) {
    super(props);

    this.store = configureStore();
  }

  render() {
    return (
      <Provider store={this.store}>
        <App />
      </Provider>
    )
  }
}

export default Redux;