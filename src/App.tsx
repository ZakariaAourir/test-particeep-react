import React, { useEffect } from 'react';
import * as ROUTES from './utils/constantes';
import styles from './styles';
import HomePage from './pages/HomePage';
import { withStyles } from '@material-ui/core';;


const App = () => {
    useEffect(() => {
        HomePage.preload();
    }, []);
    return (
      <HomePage />
    );
};

export default withStyles(styles)(App);
