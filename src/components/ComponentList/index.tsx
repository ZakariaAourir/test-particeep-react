import React, { FunctionComponent } from 'react';
import { WithStyles, withStyles } from '@material-ui/core';
import List, { ListProps } from '@material-ui/core/List';
import styles from './styles';
import classNames from 'classnames';

const CydList: FunctionComponent<WithStyles<typeof styles> & ListProps> = ({ classes, children, className }) => {
    return <List className={classNames(classes.root, className)}>{children}</List>;
};

export default withStyles(styles)(CydList);
