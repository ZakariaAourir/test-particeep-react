import { Theme } from '@material-ui/core';

const styles: any = (theme: Theme) => ({
    root: {
        flex: 1,
        minHeight: '3rem',
        boxShadow: "2 0 black",
        backgroundColor: theme.palette.primary.main,
    },
});

export default styles;
