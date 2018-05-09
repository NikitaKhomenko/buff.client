import {createStore, applyMiddleware} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux'
import * as actionTypes from './constant';

export default function configureStore(initialState, routerHistory) {
  const router = routerMiddleware(routerHistory);

  const reducers = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.ADD_HISTORY:
        console.log('ADD_HISTORY:', action.payload);
        return {...state, allHistory: action.payload};
      case actionTypes.USER_LOGIN:
        return {...state, username: action.data.username};
      default:
        return state;
    }
  };


  return createStore(combineReducers({routing:routerReducer,reducerMain:reducers}), initialState, composeWithDevTools(applyMiddleware(thunk, router)));
}
