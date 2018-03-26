import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import Login from '../components/Login';
import userActions from '../actions/user';
import routes from "../routes";


const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  const user = bindActionCreators(userActions, dispatch);
  return {
    onLogin: (data) => {
      user.login(data);
      dispatch(push('/loggedin'));
    },
    onWallet: (data) => {
        user.login(data);
        dispatch(push('/wallet'));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);
