import {createStore, applyMiddleware} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import * as actionTypes from './constant';

export default function configureStore(initialState, routerHistory) {
  const router = routerMiddleware(routerHistory);

  const reducers = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.ADD_HISTORY: {
        return {...state, allHistory: action.payload.games};
      }
      case actionTypes.ADD_LEADERBOARD_DOTA:
        return {...state, leaderBoardDota: action.payload.leaders};
      case actionTypes.ADD_LEADERBOARD_LOL:
        return {...state, leaderBoardLol: action.payload.leaders};
      case actionTypes.USER_LOGIN:
        return {...state, username: action.payload.username,address:action.payload.address};
      case actionTypes.ADD_NEWS:
        return {...state, allNews: action.payload};
      case actionTypes.ADD_TOURNAMENTS:
        return {...state, allTournaments: action.payload};
      case actionTypes.ADD_ONLINE:
        return {...state, onlineUsers: action.payload.games_online};
      case actionTypes.ADD_BALANCE:
        return {...state, userBalance: action.payload.buff_balance};
      case actionTypes.LOGOUT:
        return {};
      default:
        return state;
    }
  };


  return createStore(combineReducers({
    routing: routerReducer,
    reducerMain: reducers
  }), initialState, composeWithDevTools(applyMiddleware(thunk, router)));
}
