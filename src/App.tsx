import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as ROUTES from './utils/constantes';
import styles from './styles';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import { withStyles } from '@material-ui/core';;


const App = () => {
    useEffect(() => {
        HomePage.preload();
    }, []);
    return (
      <Switch>
        <Route path={ROUTES.PROFILE} component={ProfilePage} />
        <Route path={ROUTES.HOME} component={HomePage} />
      </Switch>

    );
};

export default withStyles(styles)(App);
