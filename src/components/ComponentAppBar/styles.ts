import { Theme } from '@material-ui/core';

const styles: any = (theme: Theme) => ({
    root: {
        flex: 1,
        minHeight: '3rem',
        height: "7.5em",
        boxShadow: "none",
        backgroundColor: theme.palette.secondary.contrastText,
    },
});

export default styles;
