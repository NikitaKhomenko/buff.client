import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard/Dashboard';

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => { // eslint-disable-line no-unused-vars
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
