import { AnyAction } from 'redux';
import { DEFAULT_STATE } from './selectors';

const reducers = (state: any = DEFAULT_STATE, action: AnyAction) => {
    switch (action.type) {
        case 'DELETE_MOVIE': {
            var index = state.movies.findIndex((o:any) => {
                return o.id === action.id;
            })
            if (index !== -1) state.movies.splice(index, 1);
            return {
                ...state,
            };
        }
        case "ADD_LIKES" : {
            state.movies.map((movie:any) => {
                if(action.id === movie.id) {
                    movie.likes = movie.likes + 1;
                }
            });
            return {
                ...state,
            };
        }
        case "ADD_DISLIKES" : {
            state.movies.map((movie:any) => {
                if(action.id === movie.id) {
                    movie.dislikes = movie.dislikes + 1;
                }
            });
            return {
                ...state,
            };
        }
        default:
            return state;
    }
   
};

export default reducers;
