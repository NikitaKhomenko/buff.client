import { connect } from 'react-redux';
import LoggedIn from '../components/LoggedIn';
import Wallet from '../components/Wallet';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => { // eslint-disable-line no-unused-vars
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
