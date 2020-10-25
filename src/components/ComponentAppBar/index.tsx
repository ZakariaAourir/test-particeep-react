import React, { FunctionComponent } from 'react';
import AppBar, { AppBarProps } from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { WithStyles, withStyles } from '@material-ui/core';
import classNames from 'classnames';
import styles from './styles';

const ComponentAppBar: FunctionComponent<WithStyles<typeof styles> & AppBarProps> = ({ classes, children, position }) => {
    return (
        <div>
            <AppBar className={classNames(classes.root, position)}>
                <Toolbar>{children}</Toolbar>
            </AppBar>
        </div>
    );
};

export default withStyles(styles)(ComponentAppBar);
