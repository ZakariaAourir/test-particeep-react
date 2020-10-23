export interface Props {
    variant?:
        | 'title1'
        | 'title2'
        | 'title3'
        | 'title4'
        | 'title5'
        | 'subtitle'
        | 'default'
        | 'comment'
        | 'footnote'
        | 'fs_2_2'
        | 'fs_16'
        | 'fs_1_4'
        | 'fs_1'
        | 'buttonTitle'
        | 'buttonSubtitle';
    color?: 'primary' | 'secondary' | 'primary-text' | 'inherit';
    weight?: 'light' | 'regular' | 'semi-bold' | 'bold' | 'extra-bold' | 'black' | 'inherit';
    textDecoration?: 'underline' | 'none';
    id?: string;
    defaultMessage?: string;
    responsive?: boolean;
}

export const DEFAULT_PROPS: Props = {
    variant: 'default',
    color: 'inherit',
    weight: 'inherit',
    id: 'id',
    textDecoration: 'none',
    defaultMessage: 'default message',
    responsive: true,
};
