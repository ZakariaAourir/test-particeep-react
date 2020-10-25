import React, { FunctionComponent } from 'react';
import { WithStyles, withStyles } from '@material-ui/core';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import styles from './styles';

const ComponentListItem: FunctionComponent<WithStyles<typeof styles> & ListItemProps> = ({ classes, children }) => {
    return <ListItem className={classes.root}>{children}</ListItem>;
};

export default withStyles(styles)(ComponentListItem);
