import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {bindActionCreators} from 'redux';
import Login from '../components/Login/Login';
import * as TodoActionCreators from '../actions/mainActions';
import {realAuth} from '../routes';
import * as actionTypes from '../Store/constant';

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  const user = bindActionCreators(TodoActionCreators, dispatch);
  return {
    onLogin: (data) => {
      // console.log('realAuth;;;>' ,data.data);
      if (realAuth.isAuthenticated) {
        dispatch(push('/loggedin'));
        dispatch({
          type: actionTypes.USER_LOGIN,
          payload: data.data
        })
      }
    },
    onRegister: () => {
      dispatch(push('/Registration'));
    },

  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);
