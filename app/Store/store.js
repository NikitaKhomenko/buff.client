import {createStore , applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const initialState ={
  username:'',
  history: 0,
  allHistory:[],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_HISTORY':
      console.log('ADD_HISTORY:',action.payload);
      return {...state,allHistory:[...state.allHistory,action.payload]};
    case 'USER_LOGIN':
      console.log('LOGIN',action.payload);
      return {...state,username:action.payload.username}
    default:
      return state;
  }
};

const store = createStore(reducer , composeWithDevTools(applyMiddleware(thunk)));
export default store