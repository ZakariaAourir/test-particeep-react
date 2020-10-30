import { createMuiTheme } from '@material-ui/core/styles';

const theme: any = {
    palette: {
        primary: {
            main: '#FF5047',
            contrastText: 'FFFFFF',
        },
        secondary: {
            main: '#1B0B33',
            contrastText: '#FCFCFC',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1080,
            lg: 1280,
            xl: 1440,
        },
    },
};

const muiTheme = createMuiTheme(theme);
export default muiTheme;

export function breakpointDown(value: string) {
    return muiTheme.breakpoints.down(theme.breakpoints.values[value]);
}

export function breakpointUp(value: string) {
    return muiTheme.breakpoints.up(theme.breakpoints.values[value]);
}
