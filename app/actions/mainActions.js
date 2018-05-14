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
  return (dispatch) => dispatch({
    type: actionTypes.ADD_HISTORY,
    payload: mock.historyAPI
  });
}
export function addLeaderBoard(leaderBoard = mock.leaderBoardAPI) {
  return (dispatch) => dispatch({
    type: actionTypes.ADD_LEADERBOARD,
    payload: mock.leaderBoardAPI
  });
}
export function addNews(news = mock.newsAPI) {
  return (dispatch) =>Api.getNewsAPI().then((res) =>  dispatch({
    type: actionTypes.ADD_NEWS,
    payload:  mock.newsAPI
  })
  )
}
export function addTournaments(tournaments = mock.tournamentsAPI) {
  return (dispatch) =>  dispatch({
      type: actionTypes.ADD_TOURNAMENTS,
      payload: mock.tournamentsAPI
    }
  )
}
