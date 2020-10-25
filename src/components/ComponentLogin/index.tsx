import React, { PureComponent } from 'react';
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




// interface for the props
interface Props {
    otherProps: any;
    updateDataFromInputsLogin: (email: any, password: any) => void;
}

// interface for the state
interface State {
    modalOpened: boolean;
    email: any;
    password: any;
}


class BlockWrapper extends PureComponent<WithStyles<typeof styles> & Props, State> {
    public state: State = {
        modalOpened: true,
        email: '',
        password: '',
    };
    // function that handles the close of the model
    private handleClose = () => {
        this.setState({
            ...this.state,
            modalOpened: false,
        });
        history.push("/");
    };
    // handles the submission of the form
    private handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(this.state);
        const { email, password } = this.state;
        const { updateDataFromInputsLogin } = this.props;
        updateDataFromInputsLogin(email, password);
        history.push('/');
        window.alert(email + 'Est connecte');
    };
    //handles the email changes
    private handleChangeEmail = (e:any) => {
        this.setState({
            email: e.target.value,
        });
    };
    // handles the password changes
    private handleChangePassword = (e:any) => {
        this.setState({
            password: e.target.value,
        });
    };
    public render() {
        const { classes } = this.props;
        const {  handleClose, handleSubmit, handleChangeEmail, handleChangePassword } = this;
        const { modalOpened } = this.state;
        return (
            <Login
                classes={classes}
                opened={modalOpened}
                handleClose={handleClose}
                handleSubmit={handleSubmit}
                handleChangeEmail={handleChangeEmail}
                handleChangePassword={handleChangePassword}
            />
        );
    }
};

const Login = ({ classes, opened, handleClose, handleSubmit, handleChangeEmail, handleChangePassword }: any) => {
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
                        Se connecter
                    </ComponentTypography>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={classes.inputText}>
                        <ComponentTextField id="stateEmail" type="email" fullWidth={true} label="Email" variant="outlined" onChange={handleChangeEmail} name="email" />
                    </div>
                    <div className={classes.inputText}>
                        <ComponentTextField
                            id="statePassword"
                            label="Password"
                            fullWidth={true}
                            type="password"
                            onChange={handleChangePassword}
                            name="password"
                            variant="outlined"
                        />
                    </div>
                    <div className={classes.buttonLogin}>
                        <ComponentButton variant="contained" type="submit" color="secondary">
                                Se connecter
                        </ComponentButton>
                    </div>
                </form>
            </ComponentModal>
        </div>
    );
};

export default withStyles(styles)(BlockWrapper);
