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
        return {...state, allHistory: action.payload};
      case actionTypes.ADD_LEADERBOARD:
        return {...state, leaderBoard: action.payload};
      case actionTypes.USER_LOGIN:
        return {...state, username: action.data.username};
      case actionTypes.ADD_NEWS:
        console.log('NEWS--->',action.payload);
        return {...state, allNews: action.payload};
      case actionTypes.ADD_TOURNAMENTS:
        console.log('ADD_TOURNAMENTS--->',action.payload);
        return {...state, allTournaments: action.payload};
      default:
        return state;
    }
  };


  return createStore(combineReducers({routing:routerReducer,reducerMain:reducers}), initialState, composeWithDevTools(applyMiddleware(thunk, router)));
}
