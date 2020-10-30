import { connect } from 'react-redux';
import { MoviesSelector } from './selectors';
import ComponentHome from '../../components/ComponentHome/index';
import {deleteMovie} from "./action";

const mapStateToProps = (state: any) => {
    console.log(state)
    return {
        movies: MoviesSelector(state),
        selectedMovies: state,
    };
};

const mapDispatchToProps = {
    deleteMovie,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ComponentHome);
