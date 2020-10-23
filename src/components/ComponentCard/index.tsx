import React, { FunctionComponent } from 'react';
import { WithStyles, withStyles } from '@material-ui/core';
import Card, { CardProps } from '@material-ui/core/Card';
import classNames from 'classnames';
import styles from './styles';


const ComponentCard: FunctionComponent<WithStyles<typeof styles> & CardProps> = ({ classes, className, children, ...rest }) => {
    return <Card className={classNames(classes.root, className)}>{children}</Card>;
};

export default withStyles(styles)(ComponentCard);
