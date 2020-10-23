import { Theme } from '@material-ui/core';

const styles: any = (theme: Theme) => {
    return {
        root: {
            color: 'inherit',
            textDecoration: 'none',
        },
        active: {
            color: theme.palette.secondary.main,
            fontWeight: 'bold',
        },
    };
};

export default styles;
