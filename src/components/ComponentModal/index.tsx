import React, { FunctionComponent } from 'react';
import { Backdrop, Fade, Modal, WithStyles, withStyles } from '@material-ui/core';
import styles from './styles';
import Props from './props';

import classNames from 'classnames';

const CydModal: FunctionComponent<WithStyles<typeof styles> & Props> = ({ classes, className, opened, handleClose, children }) => {
    return (
        <Modal
            className={classNames(classes.modal, className)}
            open={opened}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={opened}>
                <div className={classes.paper}>{children}</div>
            </Fade>
        </Modal>
    );
};

export default withStyles(styles)(CydModal);
