import { Theme } from '@material-ui/core';

const registrationStyles: any = (theme: Theme) => ({
    /*
    **
        left section
    **
    */
    AppbarStyleLeft: {
        marginLeft: '14rem',
        marginTop : "1rem",
    },
    /*
    **
        center section
    **
    */

    /*
    **
        right section
    **
    */
    styleHeaderlogin: {
        fontSize: '1.4rem',
    },
    AppbarStyleRight: {
        flex: 1,
        float: 'right',
        display: 'inline-flex',
        marginRight: '30rem',
        marginBottom: '0rem',
    },

    authHeader: {
        flex: 1,
        minWidth: '70px',
        minHeight: '30px',
        textTransform: 'none',
        borderRadius: '5px',
        boxShadow: '0 1px 7px 0 #dedcdb',
        margin: '1rem',
    },
    authTextLogin: {
        flex: 1,
        minWidth: '35px',
        minHeight: '17px',
        fontSize: '14px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: '1px',
    },
    authTextSignup: {
        flex: 1,
        minWidth: '35px',
        minHeight: '17px',
        fontSize: '14px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: '1px',
    },
    authTextLogout: {
        flex: 1,
        minWidth: '35px',
        minHeight: '17px',
        fontSize: '14px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: '1px',
    },
    mediaSlogan: {
        width : 87,
        height: 58,
    },
    people: {
        marginTop: "75px",
        width: "100%",
        height: 180,
    },
    divider: {
        width: "3px",
        marginRight: "22px",
        marginLeft: "22px",
        background: theme.palette.primary.contrastText,
    },
    offers: {
        flex: 1,
        display: 'inline-flex',
        marginLeft: '27rem',
        marginTop: '13rem',
        margin: "7px",
    },
    marginBetween: {
        marginRight: "80px",
    }
});

export default registrationStyles;

