import { connect } from 'react-redux';
import { JobsSelector } from './selectors';
import ComponentHome from '../../components/ComponentHome/index';
import {sendDataToProfile} from "./action";

const mapStateToProps = (state: any) => {
    return {
        Jobs: JobsSelector(state),
    };
};

const mapDispatchToProps = {
    sendDataToProfile,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ComponentHome);
