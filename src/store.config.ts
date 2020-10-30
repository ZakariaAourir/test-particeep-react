import { applyMiddleware, createStore, Middleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';


const middlewares: Middleware[] = [thunkMiddleware];
if (process.env.NODE_ENV === 'development') {
    middlewares.push(loggerMiddleware);
}

const store: Store = createStore(state => state, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
