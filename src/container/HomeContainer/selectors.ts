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
  DEFAULT_STATE.API = res.data;
});
export const DEFAULT_STATE = {
    API: [  
    ]
};

// do this in the service result of the service in reducer
const getStateSelector = (globalState: any) => globalState.JobInfo;
export const JobsSelector = createSelector(
    getStateSelector,
    (state: any) => (state ? state.API : DEFAULT_STATE.API),
);
