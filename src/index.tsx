import { ConnectedRouter, connectRouter } from 'connected-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store, { history } from './store.config';
import { injectAsyncReducer } from './utils/asyncInjectors';
import theme from './theme';

injectAsyncReducer({
    router: connectRouter(history),
});

ReactDOM.render(
    <Provider store={store}>
       <ConnectedRouter history={history}>
            <ThemeProvider theme={theme}>
                 <App />
            </ThemeProvider>,
        </ConnectedRouter>
     </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
