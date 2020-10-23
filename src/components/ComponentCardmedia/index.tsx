import React, { FunctionComponent } from 'react';
import { WithStyles, withStyles } from '@material-ui/core';
import CardMedia, { CardMediaProps } from '@material-ui/core/CardMedia';
import classNames from 'classnames';
import styles from './styles';

const CydCardmedia: FunctionComponent<WithStyles<typeof styles> & CardMediaProps> = ({ classes, className, image, children, ...rest }) => {
    return (
        <CardMedia className={classNames(classes.root, className)} image={image}>
            {children}
        </CardMedia>
    );
};

export default withStyles(styles)(CydCardmedia);
