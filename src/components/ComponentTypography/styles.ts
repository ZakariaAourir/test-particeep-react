import { Theme } from '@material-ui/core';
import { DEFAULT_PROPS } from './types';
import { breakpointDown } from '../../theme';

const fontSize: any = {
    title1: { size: '11.5rem', lineHeight: '1.14' },
    title2: { size: '4.8rem', lineHeight: '1.21' },
    title3: { size: '4rem', lineHeight: '1.11' },
    title4: { size: '3.2rem', lineHeight: '1.81' },
    subtitle: { size: '2.4rem', lineHeight: '1.42' },
    default: { size: '1.8rem', lineHeight: '1.75' },
    ['fs_2_2']: { size: '2.2rem', lineHeight: 'normal' },
    ['fs_16']: { size: '1.6rem', lineHeight: 'normal' },
    ['fs_1_4']: { size: '1.4rem', lineHeight: 'normal' },
    ['fs_1']: { size: '0.8rem', lineHeight: 'normal' },
    comment: { size: '1.4rem', lineHeight: '1.71' },
    footnote: { size: '1.2rem', lineHeight: 'normal' },
    buttonTitle: { size: '1.2rem', lineHeight: 'normal' },
    buttonSubtitle: { size: '1.0rem', lineHeight: 'normal' },
};

const fontWeight: any = {
    light: '300',
    regular: '400',
    'semi-bold': '600',
    bold: '700',
    'extra-bold': '800',
    black: '900',
    inherit: 'inherit',
};

const mobileFontSize: any = {
    title1: { size: '5rem', lineHeight: 'normal' },
    title2: { size: '2.4rem', lineHeight: '1.58' },
    title3: { size: '1.8rem', lineHeight: '1.75' },
    title4: { size: '2rem', lineHeight: '1.7' },
    subtitle: { size: '1.6rem', lineHeight: '1.63' },
    default: { size: '1.4rem', lineHeight: 'normal' },
    ['fs_2_2']: { size: '5.8vh', lineHeight: 'normal' },
    ['fs_16']: { size: '1.1rem', lineHeight: 'normal' },
    ['fs_1_4']: { size: '1.6rem', lineHeight: 'normal' },
    ['fs_1']: { size: '1rem', lineHeight: 'normal' },
    comment: { size: '1rem', lineHeight: 'normal' },
    footnote: { size: '1.2rem', lineHeight: 'normal' },
    buttonTitle: { size: '1.2rem', lineHeight: 'normal' },
    buttonSubtitle: { size: '1.0rem', lineHeight: 'normal' },
};

const getColor = (color: string, theme: Theme) => {
    let result: any = DEFAULT_PROPS.color;
    if (color === 'primary') {
        result = theme.palette.primary.main;
    } else if (color === 'text') {
        result = theme.palette.secondary.contrastText;
    } else if (color === 'secondary') {
        result = theme.palette.secondary.main;
    } else if (color === 'primary-text') {
        result = theme.palette.primary.contrastText;
    }
    return result;
};

const styles: any = (theme: Theme) => ({
    root: {
        fontSize: ({ variant = DEFAULT_PROPS.variant }: any) => fontSize[variant].size,
        lineHeight: ({ variant = DEFAULT_PROPS.variant }: any) => fontSize[variant].lineHeight,
        [breakpointDown('md')]: {
            fontSize: ({ variant = DEFAULT_PROPS.variant, responsive = DEFAULT_PROPS.responsive }: any) =>
                responsive ? mobileFontSize[variant].size : fontSize[variant].size,
            lineHeight: ({ variant = DEFAULT_PROPS.variant, responsive = DEFAULT_PROPS.responsive }: any) =>
                responsive ? mobileFontSize[variant].lineHeight : fontSize[variant].lineHeight,
        },
        color: ({ color }: any) => getColor(color, theme),
        fontWeight: ({ weight = DEFAULT_PROPS.weight }: any) => fontWeight[weight],
        fontStretch: 'normal',
        fontStyle: 'normal',
        letterSpacing: 'normal',
        textDecoration: ({ textDecoration }: any) => textDecoration,
    },
});

export default styles;
