import React from 'react';
import Button, { ButtonProps } from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import classNames from 'classnames';
import styles from './styles';

const ComponentButton = React.forwardRef((props: ButtonProps, ref: any) => {
    const { classes = {}, className, children = 'Button', ...rest } = props;
    return (
        <Button className={classNames(classes.root, className)} size="small" {...rest} ref={ref}>
            {children}
        </Button>
    );
});

export default withStyles(styles)(ComponentButton);
