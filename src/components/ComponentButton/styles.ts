import { Theme } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';

const borders: any = {
    outlined: '0.2rem solid',
    contained: 'none',
    text: '',
};

const paddings: any = {
    outlined: '0.25rem 2rem',
    contained: '0.45rem 2rem',
    text: '0.45rem 2rem',
};

const styles: any = (theme: Theme) => ({
    root: {
        flex: 1,
        minWidth: "21vh",
        boxShadow: 'none',
        borderRadius: '2.4rem',
        fontSize: '1.8rem',
        fontStretch: 'normal',
        fontStyle: 'normal',
        textTransform: "lowercase",
        letterSpacing: 'normal',
        fontFamily: 'inherit',
        marginTop: "5rem",
        marginLeft: "7rem",
        border: ({ variant = 'text' }: ButtonProps) => borders[variant],
        padding: ({ variant = 'text' }: ButtonProps) => paddings[variant],
        '&:hover': {
            border: ({ variant = 'text' }: ButtonProps) => borders[variant],
        },
        '&:disabled': {
            backgroundColor: '#dfeef0 ',
            '& span': {
                color: 'white',
            },
        },
        '& > *': {
            pointerEvents: 'none',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.6rem',
        },
    },
});

export default styles;
