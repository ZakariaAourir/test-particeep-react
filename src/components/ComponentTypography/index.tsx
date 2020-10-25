import React, { FunctionComponent } from 'react';
import { WithStyles, withStyles } from '@material-ui/core';
import classNames from 'classnames';
import {  Props } from './types';
import styles from './styles';


const ComponentTypography: FunctionComponent<WithStyles<typeof styles> & Props & any> = ({
    classes,
    className,
    children,
}) => {
    return (
        <span className={classNames(classes.root, className)} >
            {children}
        </span>
    );
};


export default withStyles(styles)(ComponentTypography);
