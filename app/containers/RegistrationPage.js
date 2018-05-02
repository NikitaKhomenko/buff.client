import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import Registration from '../components/Registration/Registration';

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBackToLogin: () => {
            dispatch(push('/'));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
