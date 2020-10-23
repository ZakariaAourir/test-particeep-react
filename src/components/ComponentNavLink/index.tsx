import React, { FunctionComponent } from 'react';
import { WithStyles, withStyles } from '@material-ui/core';
import { NavLink, NavLinkProps } from 'react-router-dom';
import classNames from 'classnames';
import styles from './styles';

const CydNavLink: FunctionComponent<WithStyles<typeof styles> & NavLinkProps> = ({ children, classes, className, ...rest }) => {
    return (
        <NavLink className={classNames(classes.root, className)} activeClassName={classes.active} {...rest}>
            {children}
        </NavLink>
    );
};

export default withStyles(styles)(CydNavLink);
