import { createSelector } from 'reselect';


export const DEFAULT_STATE = {
    jobs: [],
    posted: [],
};

// do this in the service result of the service in reducer
const getStateSelector = (globalState: any) => {
  if (DEFAULT_STATE.jobs.length === 0) {
      Object.assign(DEFAULT_STATE, globalState.JobInfo);
  }
  return DEFAULT_STATE;
};

export const JobsSelector = createSelector(getStateSelector, () => {
  return DEFAULT_STATE.jobs;
});

export const PostedSelector = createSelector(getStateSelector, () => {
  return DEFAULT_STATE.posted;
});
