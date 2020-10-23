import { Theme } from '@material-ui/core';

const styles: any = (theme: Theme) => ({
    '@global': {
        '*': {
            boxSizing: 'border-box',
            margin: 0,
            padding: 0,
        },
        'html, body': {
            fontSize: '10px',
            fontFamily: ['Arial', 'sans-serif'],
            color: theme.palette.primary.contrastText,
            position: 'relative',
            paddingBottom: '34px',
            minHeight: '100vh',
        },
        '*, *::before, *::after': {
            lineHeight: 'inherit',
        },
    },
});

export default styles;
