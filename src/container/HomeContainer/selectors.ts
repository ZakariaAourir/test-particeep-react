import { createSelector } from 'reselect';
import axios from "axios";

const requestOption = {
  url: "http://krow.s3-eu-west-1.amazonaws.com/offers.json",
  method: "GET",
  mode: "no-cors",
  header: {
      "acces-control-allow-origin": "*"
  },
};
axios(requestOption).then(res => {
  DEFAULT_STATE.jobs = res.data;
});
export const DEFAULT_STATE = {
    jobs: [  
    ]
};

// do this in the service result of the service in reducer
const getStateSelector = (globalState: any) => globalState.ProfileInfo;
export const JobsSelector = createSelector(
    getStateSelector,
    (state: any) => (state ? state.jobs : DEFAULT_STATE.jobs),
);
