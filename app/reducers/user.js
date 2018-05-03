import { handleActions } from 'redux-actions';
import actions from '../actions/mainActions';

export default handleActions({
  [actions.login]: (state, action) => {
    console.log('actions.login',actions.login);
    console.log('actions.state',state);
    console.log('actions.action.payload',action.payload);

    // return { ...state, ...action.payload };
  },
  [actions.wallet]: (state, action) => {
      return { ...state, ...action.payload };
  }
}, {});
