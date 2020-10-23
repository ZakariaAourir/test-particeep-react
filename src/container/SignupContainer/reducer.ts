import { AnyAction } from 'redux';
import { DEFAULT_STATE } from './selectors';

const reducers = (state: any = DEFAULT_STATE, action: AnyAction) => {
    switch (action.type) {
        case "USERS_SIGNUP_REQUEST":
            return {
                ...state,
                name: action.name,
                email: action.email,
                password: action.password,
            };
        case 'USERS_SIGNUP_SUCCESS':
            return {
                ...state,
                name: action.name,
                email: action.email,
                password: action.password,
            };
        default:
            return state;
    }
};

export default reducers;
