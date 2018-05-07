import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';

export default function configureStore(initialState, routerHistory) {
  const router = routerMiddleware(routerHistory);

  const reducers = (state = initialState, action) => {
    switch (action.type) {
      case 'USER_LOGIN':
        console.log('action.payload',action.data);
        return {...state,username:action.data.username};
      default:
        return state;
    }
  };


  return createStore(reducers, initialState,  composeWithDevTools(applyMiddleware(thunk,router)));
}
