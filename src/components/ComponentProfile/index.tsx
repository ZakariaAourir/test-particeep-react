import React, { PureComponent } from 'react';
import styles from './styles';
import { Icon, WithStyles, withStyles } from '@material-ui/core';
import ComponentCardmedia from '../ComponentCardmedia';
import mark from "../../images/mark.jpg";
import ComponentTextField from '../ComponentTextField';
import ComponentTypography from '../ComponentTypography';

interface State {
   
}

class BlockWrapper extends PureComponent<WithStyles<typeof styles> & any, State> {
    public state: State = {
    
    };
    public render() {
        return(
            <ComponentHome
                {...this.props}
            />
        )
    }
    
}

const ComponentHome = ({ classes }: any) => {
    return (
        <div className={classes.positionInPage}>
           <div className={classes.positionImage}>
                <ComponentCardmedia image={mark} className={classes.profileImage}/>
           </div>
           <div className={classes.positionInfo}>
                <div className={classes.colorName}>
                    <ComponentTypography weight="bold" variant="subtitle">
                        Zakaria aourir  
                    </ComponentTypography>
                </div>
                <div className={classes.fixLocalisation}>
                    <Icon className={classes.iconSvg}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={classes.iconImg}>
                            <path d="M464,64H48C21.49,64,0,85.49,0,112v288c0,26.51,21.49,48,48,48h416c26.51,0,48-21.49,48-48V112
                                C512,85.49,490.51,64,464,64z M452.48,96L256,236.32L59.52,96H452.48z M32,393.44V115.68l161.92,115.68L32,393.44z M54.56,416
                                l165.76-165.76l26.24,18.72c5.555,3.955,13.005,3.955,18.56,0l26.24-18.72L457.44,416H54.56z M480,393.44L318.08,231.36
                                L480,115.68V393.44z"/>
                        </svg>
                    </Icon>
                    <div className={classes.email}>
                        <ComponentTypography weight="lighter" className={classes.informationColor} variant="fs_16">
                            za@gmail.com  
                        </ComponentTypography>
                    </div>
                </div>
                <div className={classes.fixLocalisation}>
                    <Icon className={classes.iconSvg}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={classes.iconImg}>
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            <path d="M0 0h24v24H0z" fill="none" />
                        </svg>
                    </Icon>
                    <div className={classes.localisation}>
                        <ComponentTypography weight="lighter" className={classes.informationColor} variant="fs_16">
                            072 Avenue Nowhere Suite 8548  
                        </ComponentTypography>
                    </div>
                </div>
           </div>
        </div>
        
    );
};
export default withStyles(styles)(BlockWrapper);