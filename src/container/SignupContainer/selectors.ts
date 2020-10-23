import { createSelector } from 'reselect';

export const DEFAULT_STATE = {
    name: 'Name Default',
    email: 'Email Default',
    password: 'Passwork Default',
};

const getStateSelector = (globalState: any) => globalState.signupInfo;
export const nameSelector = createSelector(
    getStateSelector,
    (state: any) => (state ? state.name : DEFAULT_STATE.name),
);
export const emailSelector = createSelector(
    getStateSelector,
    (state: any) => (state ? state.email : DEFAULT_STATE.email),
);
export const passwordSelector = createSelector(
    getStateSelector,
    (state: any) => (state ? state.password : DEFAULT_STATE.password),
);
