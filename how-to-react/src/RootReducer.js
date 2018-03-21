// redux
import { combineReducers } from 'redux'; 

// import all your app reducers here
import AppReducer from './App.reducer.js';

export default combineReducers({
  'Data': AppReducer
}); 