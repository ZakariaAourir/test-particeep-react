import { Theme } from '@material-ui/core';

const registrationStyles: any = (theme: Theme) => ({ 
    Jobs: {
        flex: 1,
        marginTop: "2rem",
        display: "flex",
        maxWidth: "70%",
        minHeight: "15%",
        marginLeft: "28rem",
    },
    card: {
        borderRadius: "8px",
        borderStyle: "solid",
        borderColor: "#979797",
        borderWidth: "medium",
        boxShadow: "none",
    },
    Image1: {
        flex: 1,
        maxWidth : "100px",
        maxHeight: "100px",
        borderRadius: "50%",
        margin: "20px 50px",
        borderStyle: "solid",
        borderWidth: "thin",
        borderColor: theme.palette.secondary.main,
    },
    name: {
        fontSize: '2.1vh', 
        lineHeight: 'normal',
        color: theme.palette.primary.main
    },
    jobDescription: {
        display: "grid",
        float: "left",
    },
    date: {
        marginTop: "7px",
        fontSize: '1.2vh', 
        lineHeight: 'normal',
        color: theme.palette.secondary.main,
    },
    description: {
        color: "#767474",
        marginTop: "10px",
        fontSize: '1.4vh', 
        lineHeight: 1.8,
        wordSpacing: "5px",
        fontWeight: 100
    },
    positionInPage: {
        paddingTop: "32rem",
    },
    positionItems: {
        marginTop: "2rem",
    },
    pagination: {
        display: "flex",
        fontSize: "large",
        position: "relative",
        float: "right",
        listStyleType: "none",
        marginTop: "1rem",
        marginRight: "30rem"
    },
    linkPage: {
        textDecoration: "none"
    },
    Box: {
        width: "28px",
        height: "26px",
        margin: "3px",
        borderRadius: "4px",
        borderColor: "#767474",
        backgroundColor: theme.palette.secondary.contrastText,
        borderStyle: "solid",
        borderWidth: "thin",
        marginRight: "6px",
        textAlign: "center",
        marginTop: "4px",
        color: "#767474",
        "&:hover": {
            backgroundColor: "#0097E5",
            borderColor: "#0097E5",
        },
        positionButton: {
            marginTop: "10px",
            color: "#0097E5"
        }
    }
});

export default registrationStyles;

