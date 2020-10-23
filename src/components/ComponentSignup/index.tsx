import React, { Component, PureComponent } from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import styles from './styles';
import ComponentModal from '../ComponentModal';
import ComponentButton from '../ComponentButton';
import ComponentTextField from "../ComponentTextField";
import ComponentCloseIcon from '../ComponentCloseIcon';
import { history } from '../../store.config';
import ComponentTypography from '../ComponentTypography';
import ComponentNavLink from '../ComponentNavLink';
import { HOME } from '../../utils/constantes';





interface Props {
    otherProps: any;
    updateDataFromInputsSignup: (name: any, email: any, password: any) => void;
}

interface State {
    modalOpened: boolean;
    email: any;
    name: any;
    password:any;
}


class BlockWrapper extends PureComponent<WithStyles<typeof styles> & Props, State> {
    public state: State = {
        modalOpened: true,
        email: "",
        name: "",
        password: "",
        
    };

    private handleClose = () => {
        this.setState({
            ...this.state,
            modalOpened: false,
        });
        history.push("/");
    };
    private handleSubmit = (e:any) => {
        e.preventDefault();
        const { name, email, password } = this.state;
        const { updateDataFromInputsSignup } = this.props;
        updateDataFromInputsSignup(name, email, password);
        history.push('/');
        window.alert(name + 'Est inscrit avec succès');
    };
    private handleChangeEmail = (e:any) => {
        this.setState({
            email: e.target.value,
        });
    };
    private handleChangePassword = (e:any) => {
        this.setState({
            password: e.target.value,
        })
    };
    private handleChangeName = (e:any) => {
        this.setState({
            name: e.target.value,
        });
    };
    public render() {
        const { classes } = this.props;
        const {  handleClose, handleSubmit, handleChangeName, handleChangeEmail, handleChangePassword } = this;
        const { modalOpened } = this.state;
        return (
            <Signup
                classes={classes}
                opened={modalOpened}
                handleClose={handleClose}
                handleSubmit={handleSubmit}
                handleChangeName={handleChangeName}
                handleChangeEmail={handleChangeEmail}
                handleChangePassword={handleChangePassword}
            />
        );
    }
};

const Signup = ({ classes, opened, handleClose, handleSubmit,handleChangeName, handleChangeEmail, handleChangePassword }: any) => {
    return (
        <div>
            <ComponentModal opened={opened}>
                <div className={classes.box}>
                    <ComponentNavLink to={HOME} className={classes.btn} onClick={handleClose}>
                        <ComponentCloseIcon />
                    </ComponentNavLink>
                </div>
                <div className={classes.connecterText}>
                    <ComponentTypography variant="fs_2_2" weight="bold" >
                        S'inscrire
                    </ComponentTypography>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={classes.inputText}>
                        <ComponentTextField id="stateName" type="text" fullWidth={true} label="Nom complet" variant="outlined" onChange={handleChangeName} name="name" />
                    </div>
                    <div className={classes.inputText}>
                        <ComponentTextField id="stateEmail" type="email" fullWidth={true} label="E-mail address" variant="outlined" onChange={handleChangeEmail} name="email" />
                    </div>
                    <div className={classes.inputText}>
                        <ComponentTextField
                            id="statePassword"
                            label="Mot de passe"
                            fullWidth={true}
                            type="password"
                            onChange={handleChangePassword}
                            name="password"
                            variant="outlined"
                        />
                    </div>
                    <div className={classes.inputText}>
                        <ComponentTextField
                            id="statePassword"
                            label=" Confirmation de mot de passe"
                            fullWidth={true}
                            type="password"
                            name="password"
                            variant="outlined"
                        />
                    </div>
                    <div className={classes.buttonLogin}>
                        <ComponentButton variant="contained" type="submit" color="secondary">
                                S'inscrire
                        </ComponentButton>
                    </div>
                </form>
            </ComponentModal>
        </div>
    );
};

export default withStyles(styles)(BlockWrapper);
