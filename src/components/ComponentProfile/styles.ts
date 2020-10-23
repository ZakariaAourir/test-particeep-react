import { Theme } from '@material-ui/core';

const registrationStyles: any = (theme: Theme) => ({ 
    profileImage: {
        flex: 1,
        width: "16vh",
        height: "20vh",
        borderRadius: "8px",
    },
    positionInPage: {
        paddingTop: "34rem",
        display : "flex",
    },
    positionImage: {
        marginLeft: "32vh",
    },
    colorName: {
        color: "#4B4949",
        paddingTop: "-2px",
    },
    informationColor: {
        color: "#7C7777",
        paddingTop: "-2px",
        fontWeight: 550
    },
    positionInfo: {
        marginLeft: "20px",
        marginTop: "10px",
    },
    iconImg: {
        height: '2vh',
        width: "2vh",
        color: "#6387B7",
    },
    iconSvg: {
        textAlign: 'center',
        fontSize: '1rem',
        fill: "#6387B7",
        opacity: '0.6',
        marginTop: "10px",
        '&:hover': {
            transition: '1.4s',
            opacity: '1',
        },
    },
    fixLocalisation: {
        display:"block",
        marginTop : "8px",
    },
    localisation: {
        marginTop: "-18px",
        marginLeft: "34px"
    },
    email: {
        marginTop: "-19px",
        marginLeft: "35px"
    }
});

export default registrationStyles;

