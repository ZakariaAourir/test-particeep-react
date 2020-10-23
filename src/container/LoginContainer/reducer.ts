import { AnyAction } from 'redux';
import { DEFAULT_STATE } from './selectors';

const reducers = (state: any = DEFAULT_STATE, action: AnyAction) => {
    switch (action.type) {
        case "USERS_LOGIN_REQUEST":
            return {
                ...state,
                email: action.email,
                password: action.password,
            };
        case "USERS_LOGIN_SUCCESS":
            return {
                ...state,
                email: action.email,
                password: action.password,
            };
        default:
            return state;
    }
    
};

export default reducers;
