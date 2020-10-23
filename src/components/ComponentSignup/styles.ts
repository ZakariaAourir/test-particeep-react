import { Theme } from '@material-ui/core';

const registrationStyles: any = (theme: Theme) => ({ 
    buttonLogin: {
        float: "right",
        marginTop: "-48px",
    },
    inputText: {
        marginBottom: "14px"
    },
    connecterText: {
        marginBottom: "30px",
    },
    btn: {
        position: 'absolute',
        top: '-3vh',
        right: '-2vh',
        color: theme.palette.primary.contrastText
    },
    box: {
        position: 'relative',
    },
});

export default registrationStyles;

