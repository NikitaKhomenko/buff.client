import { connect } from 'react-redux';
import ApBarDashboard from '../components/ApBarDashboard/AppBarDashboard';

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => { // eslint-disable-line no-unused-vars
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ApBarDashboard);
