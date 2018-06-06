import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {bindActionCreators} from 'redux';
import Registration from '../components/Registration/Registration';
import * as mainActions from '../actions/mainActions';
import {realAuth} from '../routes';
import * as actionTypes from '../Store/constant';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRegister: (data) => {
      // console.log('realAuth;;;>', data);
      if (realAuth.isAuthenticated) {
        dispatch(push('/loggedin'));
        dispatch({
          type: actionTypes.USER_LOGIN,
          payload: data.data
        });
      }
    },
    onBackToLogin: () => {
      dispatch(push('/'));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
