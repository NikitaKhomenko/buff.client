import { connect } from 'react-redux';
import Registration from '../components/Registration';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import userActions from '../actions/user';


const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    const user = bindActionCreators(userActions, dispatch);
    return {
        onBackToLogin: () => {
            dispatch(push('/'));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
