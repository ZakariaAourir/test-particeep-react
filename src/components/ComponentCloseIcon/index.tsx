import React, { FunctionComponent } from 'react';
import CloseIcon from '@material-ui/icons/Cancel';
import { WithStyles, withStyles } from '@material-ui/core';
import styles from './styles';

import classNames from 'classnames';

const CydCloseIcon: FunctionComponent<WithStyles<typeof styles> & any> = ({ classes, className }) => {
    return <CloseIcon className={classNames(classes.root, className)}></CloseIcon>;
};

export default withStyles(styles)(CydCloseIcon);
