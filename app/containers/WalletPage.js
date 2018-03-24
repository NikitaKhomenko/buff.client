import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import Wallet from '../components/Wallet.js';
import userActions from '../actions/user';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  const user = bindActionCreators(userActions, dispatch);
  return {
    onWallet: (data) => {
      user.login(data);
      dispatch(push('/wallet'));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
