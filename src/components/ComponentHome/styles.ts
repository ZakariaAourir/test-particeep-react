import { Theme } from '@material-ui/core';

const registrationStyles: any = (theme: Theme) => ({ 
    moviesContainer: {
        marginTop: "10rem",
    },
    cardContainer: {
        display: "inline-block",
        width: '90%',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    root: {
        flex: 1,
        minWidth: '42vh',
        minHeight: '35vh',
        borderRadius: '5px',
        boxShadow: '0 1px 4px 0 #dedcdb',
        backgroundColor: 'rgba(246, 233, 230, 0.25)',   
    },
    cardMedia: {
        flex:1,
        minWidth: '42vh',
        minHeight: '18vh',
        borderRadius: '5px',
    },
    cardWrapper: {
        display: 'inline-block',
        alignItems: 'center',
        margin: '8rem 2rem',
    },
    category: {
        marginTop : "2px"
    },
    pagination: {
        display: "inline-block",
        padding: "6px 14px",
        textDecoration: "none",
        border: "1px solid #ddd",
        color: "black",
        "&:active": {
            backgroundColor: "#4caf50",
            border: "1px solid #4caf500",
            color: "white"
        }
    },
    positionCards: {
        marginLeft: "25rem"
    },
    positionPagination: {
        display: "inline-block",
        fontSize: "large",
        position: "relative",
        listStyleType: "none",
        marginTop: "1vh",
        marginRight: "1vh"
    },
    positionWholePag: {
        float: "right",
        marginRight: "22vh",
        marginTop: "-7vh"
    },
    iconImg: {
        marginLeft: "3rem",
        marginTop: "1rem",
        color: theme.palette.secondary.main,
    },
    iconImgDislike: {
        marginLeft: "3rem",
        marginBottom: "-5px",
        color: theme.palette.secondary.main,
    },
    iconSvg: {
        textAlign: 'center',
        fontSize: '3.2rem',
        fill: theme.palette.secondary.main,
        opacity: '0.6',
        marginRight: "-26rem",
        marginTop: "-10rem",
        '&:hover': {
            transition: '1.4s',
            opacity: '1',
        },
    },
    iconSvgDislike: {
        textAlign: 'center',
        fontSize: '3.2rem',
        fill: theme.palette.secondary.main,
        opacity: '0.6',
        marginRight: "-26rem",
        marginTop: "-7rem",
        '&:hover': {
            transition: '1.4s',
            opacity: '1',
        },     
    },
    titles: {
        float: "left",
    },
    fixOnContent: {
        display: "inline-block"
    },
    dislike: {
        marginTop: "-15.7rem"
    },
    like: {
        marginTop: "-15.7rem",
        marginRight: "2rem",
    } 
});

export default registrationStyles;

