import { connect } from 'react-redux';
import { emailSelector, passwordSelector } from './selectors';
import ComponentLogin from '../../components/ComponentLogin/index';
import { updateDataFromInputsLogin } from './action';

const mapStateToProps = (state: any) => {
    return {
        email: emailSelector(state),
        password: passwordSelector(state),
    };
};

const mapDispatchToProps = {
    updateDataFromInputsLogin,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ComponentLogin);
