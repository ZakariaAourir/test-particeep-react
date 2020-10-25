import { connect } from 'react-redux';
import { JobsSelector, PostedSelector } from './selectors';
import ComponentProfile from '../../components/ComponentProfile/index';

const mapStateToProps = (state: any) => {
    return {
        jobs: JobsSelector(state),
        posted: PostedSelector(state),
    };
};


export default connect(
    mapStateToProps,
)(ComponentProfile);
