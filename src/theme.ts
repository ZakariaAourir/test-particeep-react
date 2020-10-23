import { createMuiTheme } from '@material-ui/core/styles';

const theme: any = {
    palette: {
        primary: {
            main: '#34699D',
            contrastText: '#1D2236',
        },
        secondary: {
            main: '#0097E5',
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
