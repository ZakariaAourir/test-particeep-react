import { Theme } from '@material-ui/core';
import { breakpointDown } from '../../theme';

const styles: any = (theme: Theme) => {
    return {
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '1.5rem',
        },
        paper: {
            minWidth: '65rem',
            boxShadow: '0 1px 7px 0 #dedcdb',
            padding: '4rem 3.2rem',
            [breakpointDown('sm')]: {
                maxWidth: '100%',
            },
            backgroundColor: theme.palette.background.paper,
        },
    };
};

export default styles;
