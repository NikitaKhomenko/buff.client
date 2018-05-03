import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import Login from '../components/Login/Login';
import * as TodoActionCreators from '../actions/mainActions'
console.log('TodoActionCreators',TodoActionCreators);
const mapStateToProps = (state) => {
  console.log('LoginPage', state);
  return state;
};

const mapDispatchToProps = (dispatch) => {
  const user = bindActionCreators(TodoActionCreators, dispatch);
  return {
    onLogin: (data) => {
      console.log('data onLogin:',data);
      user.loginUser(data);
      dispatch(push('/loggedin'));
    },
     onRegister: () => {
       user.loginUser();
       dispatch(push('/Registration'));
     },

    onWallet: () => {
        user.loginUser();
        dispatch(push('/wallet'));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);
