import { connect } from 'react-redux';
import { OpenModalSelector } from './selectors';
import ComponentHeader from '../../components/ComponentHeader/index';

const mapStateToProps = (state: any) => {
    return {
        authLogin: OpenModalSelector(state),
        AuthSuccess: localStorage.getItem("jwt"),
    };
};


export default connect(
    mapStateToProps,
)(ComponentHeader);

