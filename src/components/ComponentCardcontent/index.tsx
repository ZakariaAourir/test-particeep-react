import React, { FunctionComponent } from 'react';
import { WithStyles, withStyles } from '@material-ui/core';
import Card, { CardProps } from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import classNames from 'classnames';
import styles from './styles';

const ComponentCardcontent: FunctionComponent<WithStyles<typeof styles> & CardProps> = ({ classes, className, children, ...rest }) => {
    return <CardContent className={classNames(classes.root, className)}>{children}</CardContent>;
};

export default withStyles(styles)(ComponentCardcontent);
