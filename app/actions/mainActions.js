import * as actionTypes from './../Store/constant';
import Api from '../Store/ApiRequests';
import {push} from 'react-router-redux';

export function addHistory(address) {
  return (dispatch) => Api.getHistoryAPI(address).then((res) => dispatch({
      type: actionTypes.ADD_HISTORY,
      payload: res.data
    })
  );
}

export function addLeaderBoardDota() {
  return (dispatch) => Api.getLeaderboardDotaAPI().then((res) => dispatch({
    type: actionTypes.ADD_LEADERBOARD_DOTA,
    payload: res.data
  }));
}

export function addLeaderBoardLOL() {
  return (dispatch) => Api.getLeaderboardLoLAPI().then((res) => dispatch({
    type: actionTypes.ADD_LEADERBOARD_LOL,
    payload: res.data
  }));
}

export function addNews() {
  return (dispatch) => Api.getNewsAPI().then((res) => dispatch({
      type: actionTypes.ADD_NEWS,
      payload: res.data
    })
  );
}

export function addTournaments() {
  return (dispatch) => Api.getTournamentsAPI().then((res) => dispatch({
      type: actionTypes.ADD_TOURNAMENTS,
      payload: res.data
    })
  );
}

export function addOnlineUsers() {
  return (dispatch) => Api.getOnlineAPI().then((res) => dispatch({
      type: actionTypes.ADD_ONLINE,
      payload: res.data
    })
  );
}

export function addUserBalance(address) {
  return (dispatch) => Api.getBalanceAPI(address).then((res) => dispatch({
      type: actionTypes.ADD_BALANCE,
      payload: res.data
    })
  );
}

export function logout() {
  return (dispatch) => dispatch({
    type: actionTypes.LOGOUT,
  });
}

export function onBackToLogin() {
  return (dispatch) => dispatch(push('/'));
}


