import { AnyAction } from 'redux';
import { DEFAULT_STATE } from './selectors';

const reducers = (state: any = DEFAULT_STATE, action: AnyAction) => {
    switch (action.type) {
        case 'SEND_TO_PROFILE':
            return {
                ...state,
                posted: action.posted,
            };

        default:
            return state;
    }
};

export default reducers;
