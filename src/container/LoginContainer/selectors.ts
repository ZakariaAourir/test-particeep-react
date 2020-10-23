import { createSelector } from 'reselect';

export const DEFAULT_STATE = {
    email: 'Email Default',
    password: 'Password Default',
};

const getStateSelector = (globalState: any) => globalState.userInfo;

export const emailSelector = createSelector(getStateSelector, (state: any) => (state ? state.email : DEFAULT_STATE.email));
export const passwordSelector = createSelector(getStateSelector, (state: any) => (state ? state.password : DEFAULT_STATE.password));
