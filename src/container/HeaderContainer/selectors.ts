import { createSelector } from 'reselect';

export const DEFAULT_STATE = {
    authLogin: [],
};

const getStateSelector = (globalState: any) => {
  if (DEFAULT_STATE.authLogin.length === 0) {
    Object.assign(DEFAULT_STATE, globalState.userInfo);
  }
  return DEFAULT_STATE;
}
export const OpenModalSelector = createSelector(
    getStateSelector,
    () => {
      console.log(DEFAULT_STATE.authLogin);
      return DEFAULT_STATE.authLogin;  
});
