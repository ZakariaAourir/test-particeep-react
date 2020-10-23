import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { WithStyles, withStyles } from '@material-ui/core';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { injectIntl } from 'react-intl';

import styles from './styles';

const CydTextField2: FunctionComponent<WithStyles<typeof styles> & any> = ({
    children,
    classes,
    onChange,
    type,
    label,
    multiline,
    fullWidth,
    rows,
    rowsMax,
    variant,
}) => {
    return (
        <div className={classNames(classes.root)}>
            <TextField
                type={type}
                onChange={onChange}
                label={label}
                multiline={multiline}
                fullWidth={fullWidth}
                rows={rows}
                rowsMax={rowsMax}
                variant={variant}
                className={classNames(classes.inputRoot)}
                InputProps={{
                    classes: {
                        input: classes.resize,
                    },
                }}
                InputLabelProps={{
                    classes: {
                        root: classes.labelRoot,
                    },
                }}
            />
        </div>
    );
};

export default withStyles(styles)(CydTextField2);
