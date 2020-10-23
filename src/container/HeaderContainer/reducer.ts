import { AnyAction } from 'redux';
import { DEFAULT_STATE } from './selectors';

const reducers = (state: any = DEFAULT_STATE, action: AnyAction) => {
    return {
        ...state,
    }
    
};

export default reducers;
