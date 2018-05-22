import * as actionTypes from './../Store/constant';
import Api from "../Store/ApiRequests";
import mock from './mockAPI'

export function loginUser(data = {}) {
  return {
    type: actionTypes.USER_LOGIN,
    data
  };
}

export function addHistory(history = mock.historyAPI) {
  return (dispatch) => Api.getHistoryAPI().then((res) =>  dispatch({
    type: actionTypes.ADD_HISTORY,
    payload: res.data
  })
  )
}
export function addLeaderBoardDota(leaderBoard = mock.leaderBoardAPI) {
  return (dispatch) => Api.getLeaderboardDotaAPI().then((res) => dispatch({
    type: actionTypes.ADD_LEADERBOARD_DOTA,
    payload: res.data
  }));
}
export function addLeaderBoardLOL(leaderBoard = mock.leaderBoardAPI) {
  return (dispatch) => Api.getLeaderboardLoLAPI().then((res) => dispatch({
    type: actionTypes.ADD_LEADERBOARD_LOL,
    payload: res.data
  }));
}
export function addNews(news = mock.newsAPI) {
  return (dispatch) => Api.getNewsAPI().then((res) =>  dispatch({
    type: actionTypes.ADD_NEWS,
    payload:  res.data
  })
  )
}
export function addTournaments(tournaments = mock.tournamentsAPI) {
  return (dispatch) => Api.getTournamentsAPI().then((res) =>   dispatch({
      type: actionTypes.ADD_TOURNAMENTS,
      payload: res.data
    })
  )
}
export function postLogin(user) {
  return (dispatch) => Api.postLogin(user).then((res,err) =>  {
    console.log('RESSSSS:>>>', res);
    console.log('errr:>>>', err);
    return dispatch({
      type: actionTypes.USER_LOGIN,
      payload: res.data
    })}
  ).catch((error) => {
    console.log('ER>>>', error);
    return dispatch({
      type: actionTypes.USER_LOGIN,
      payload: {user:{fullname: "ERROR"}}
    })
  })
}
