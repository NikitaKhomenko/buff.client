import { createAction } from 'redux-actions';

export default {
  login: createAction('USER_LOGIN' ,data => data),
  wallet: createAction('USER_LOGIN')
};
export function loginUser(data = {}) {
  console.log('LOGiN:user', data);
  return {
    type: 'USER_LOGIN',
    data
  }
}
