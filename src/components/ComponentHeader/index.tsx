import React ,{ PureComponent } from 'react';
import styles from './styles';
import {  Grid, withStyles } from '@material-ui/core';
import ComponentNavLink from '../ComponentNavLink';
import ComponentAppBar from '../ComponentAppBar';
import ComponentCardmedia from "../ComponentCardmedia";
import { HOME, LOGIN, SIGNUP } from '../../utils/constantes';
import Slogan from "../../images/Slogan.png";
import ComponentTypography from '../ComponentTypography';


// interface to created state for the component
interface State {
    openLoginModal: boolean;
}

// component for the login and connection with container
class BlockWrapper extends PureComponent<any, State> {
    public state: State = {
        openLoginModal: false,
    };
    // function for open model of the Auth components
    private openLoginComponent = () => {
        this.setState({
            ...this.state,
            openLoginModal: true,
        });
    };
    // function that simulates logout
    private resetAuthSuccess = () => {
       localStorage.clear();
    };
    render() {
        const {  openLoginComponent,resetAuthSuccess } = this;
        var {AuthSuccess} = this.props;
        console.log(AuthSuccess);
        return (
            <ComponentHeader openLoginComponent={openLoginComponent} resetAuthSuccess={resetAuthSuccess} AuthSuccess={AuthSuccess} {...this.props}  />
        );
    }
}


const ComponentHeader = ({ classes, openLoginComponent, resetAuthSuccess, AuthSuccess }: any) => {  
    return (
        <div>
            <Grid container>
                <ComponentAppBar>
                    <Grid item xs={12} sm={6}>
                        <div className={classes.AppbarStyleLeft}>
                            <ComponentNavLink to={HOME}>
                                <ComponentCardmedia className={classes.mediaSlogan} image={Slogan}/>
                            </ComponentNavLink>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        {
                          AuthSuccess ? (
                            <div className={classes.AppbarStyleRight}>
                                <ComponentNavLink to={HOME} onClick={resetAuthSuccess}>
                                    <ComponentTypography color="primary-text" weight="bold">Bonjour <span className={classes.zakaria}>Zakaria Aourir</span></ComponentTypography>
                                </ComponentNavLink>
                            </div>
                          ) : (
                            <div className={classes.AppbarStyleRight}>
                                <ComponentNavLink to={SIGNUP} >
                                    <ComponentTypography color="primary-text" weight="bold">S'inscrire</ComponentTypography>
                                </ComponentNavLink>
                                <hr className={classes.divider}/>
                                <ComponentNavLink to={LOGIN} onClick={openLoginComponent}>
                                    <ComponentTypography color="primary-text" weight="bold">Se connecter</ComponentTypography>
                                </ComponentNavLink>
                            </div>
                          )
                        }   
                    </Grid>    
                </ComponentAppBar>
            </Grid>
        </div>
    );
};
export default withStyles(styles)(BlockWrapper);