import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import Login from '../components/Login/Login';


const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: () => {
      dispatch(push('/loggedin'));
    },
     onRegister: () => {
       dispatch(push('/Registration'));
     },

    onWallet: () => {
        dispatch(push('/wallet'));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);
