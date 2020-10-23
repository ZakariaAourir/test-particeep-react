import React from 'react';
import { withStyles } from '@material-ui/core';
import ComponentNavLink from '../ComponentNavLink';
import ComponentCardmedia from '../ComponentCardmedia';
import styles from './styles';
import { HOME, PROFILE } from '../../utils/constantes';
import People from "../../images/People.png";
import ComponentTypography from '../ComponentTypography';



const ComponentSubHeader = ({ classes }: any) => {
    return (
        <ComponentCardmedia image={People} className={classes.people}>
                <div className={classes.offers}>
                    <ComponentNavLink to={HOME} className={classes.marginBetween}>
                        <ComponentTypography color="text" weight="bold">Liste des offres</ComponentTypography>
                    </ComponentNavLink>
                    <ComponentNavLink to={PROFILE}>
                        <ComponentTypography color="text" weight="bold">Mon profil</ComponentTypography>
                    </ComponentNavLink>
                </div>
        </ComponentCardmedia>
    );
};

export default withStyles(styles)(ComponentSubHeader);
