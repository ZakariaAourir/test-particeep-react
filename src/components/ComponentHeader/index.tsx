import React  from 'react';
import styles from './styles';
import {  Grid, withStyles } from '@material-ui/core';
import ComponentAppBar from '../ComponentAppBar';
import ComponentTypography from '../ComponentTypography';






const ComponentHeader = ({ classes }: any) => {  
    return (
        <div>
            <Grid container>
                <ComponentAppBar>
                    <ComponentTypography>Particeep</ComponentTypography>
                </ComponentAppBar>
            </Grid>
        </div>
    );
};
export default withStyles(styles)(ComponentHeader);