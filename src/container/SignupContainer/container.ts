import { connect } from 'react-redux';
import { nameSelector, emailSelector, passwordSelector } from './selectors';
import ComponentSignup from '../../components/ComponentSignup/index';
import { updateDataFromInputsSignup } from './actions';

const mapStateToProps = (state: any) => {
    localStorage.clear();
    return {
        name: nameSelector(state),
        email: emailSelector(state),
        password: passwordSelector(state),
    };
};

const mapDispatchToProps = {
    updateDataFromInputsSignup,
};


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ComponentSignup);
