import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import Login from '../components/Login/Login';
import * as TodoActionCreators from '../actions/mainActions'
console.log('TodoActionCreators',TodoActionCreators);
const mapStateToProps = (state, ownProps) => {
  console.log('LoginPage', state);
  console.log('ownProps', ownProps);
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

  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);
