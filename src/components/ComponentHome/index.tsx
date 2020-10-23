import React, { PureComponent } from 'react';
import styles from './styles';
import {  Grid, WithStyles, withStyles } from '@material-ui/core';
import ComponentNavLink from '../ComponentNavLink';
import ComponentCardmedia from "../ComponentCardmedia";
import { HOME, PROFILE } from '../../utils/constantes';
import People from "../../images/People.png";
import ComponentTypography from '../ComponentTypography';
import ComponentCard from "../ComponentCard";
import ComponentCardcontent from "../ComponentCardcontent";
import Image1 from "../../images/abstract.jpg";
import ComponentList from "../ComponentList";
import ComponentListitem from "../ComponentListitem";
import Pagination from "./Pagination";
import ComponentButton from "../ComponentButton";


interface Props {
    Jobs : any,
    sendDataToProfile: (posted: any) => void;
}

interface State {
   currentPage: any;
   jobsPerPage: any;
   postedJobs : any;

}

class BlockWrapper extends PureComponent<WithStyles<typeof styles> & any, State> {
    public state: State = {
       currentPage: 1,
       jobsPerPage: 3,
       postedJobs: [], 
    };
    private paginate = (pageNumber:any) => {
        this.setState({
            currentPage: pageNumber
        })
    };
    private postForJobs = (id:any) => {
        const posted = this.state.postedJobs;
        posted.push(id);
        this.setState({
            ...this.state,
            postedJobs: posted,
        });
        // const {sendDataToProfile} = this.props;
        // sendDataToProfile(this.state.postedJobs)
        // remove redux from here 
    }
    public render() {
        const {Jobs} = this.props;
        const totalJobs = Jobs.length;
        const {currentPage, jobsPerPage} = this.state;
        const indexOfLastJob = currentPage * jobsPerPage;
        const indexOfFirstJob = indexOfLastJob - jobsPerPage;
        const currentJobs = Jobs.slice(indexOfFirstJob, indexOfLastJob);
        const {paginate, postForJobs} = this;
        return(
            <ComponentHome
                currentJobs = {currentJobs}
                jobsPerPage= {jobsPerPage}
                totalJobs ={totalJobs}
                postForJobs={postForJobs}
                paginate={paginate}
                {...this.props}
            />
        )
    }
    
}

const ComponentHome = ({ classes, currentJobs, jobsPerPage, totalJobs, postForJobs, paginate }: any) => {
    const Jobs = currentJobs.map((item:any) => {
        return(
            <ComponentList key={item._id} className={classes.positionCards}>
                <ComponentListitem>
                    <ComponentCard className={classes.Jobs} classes={{ root: classes.card }}>
                        <Grid container>
                            <Grid item xs={12} sm={2}>
                                <img src={Image1} alt="this is logo" className={classes.Image1}/>
                            </Grid>
                            <Grid item xs={12} sm={7}>
                                <ComponentCardcontent className={classes.jobDescription}>
                                    <span className={classes.name}>{item.name}</span>
                                    <span className={classes.date}>Ajouté le {item.createdAt}</span>
                                    <span className={classes.description}>{item.description}</span>
                                </ComponentCardcontent>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <div className={classes.positionButton}>
                                    <ComponentButton color="secondary" variant="contained" onClick={(id:any) => {postForJobs(item._id)}}>
                                        <span>
                                            postuler
                                        </span>
                                    </ComponentButton>
                                </div>   
                            </Grid>
                        </Grid>
                    </ComponentCard>
                </ComponentListitem>
            </ComponentList>
        )
    });
    return (
        <div>
            <div className={classes.positionInPage}>
                {Jobs}
                <Pagination jobsPerPage={jobsPerPage} totalJobs={totalJobs} paginate={paginate}/>
            </div>
        </div>
        
    );
};
export default withStyles(styles)(BlockWrapper);