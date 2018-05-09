import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import Registration from '../components/Registration/Registration';
import * as mainActions from '../actions/mainActions';
const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    const user = bindActionCreators(mainActions, dispatch);
    return {
        onBackToLogin: () => {
            dispatch(push('/'));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
