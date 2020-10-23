import { combineReducers, ReducersMapObject } from 'redux';
import store from '../store.config';

let reducers = {};
export const injectAsyncReducer = (asyncReducers: ReducersMapObject<any, any>): void => {
    reducers = {
        ...reducers,
        ...asyncReducers,
    };
    store.replaceReducer(combineReducers(reducers));
};
