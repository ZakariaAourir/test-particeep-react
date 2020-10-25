import React, { PureComponent } from 'react';
import styles from './styles';
import {  Grid, WithStyles, withStyles } from '@material-ui/core';
import ComponentCard from "../ComponentCard";
import ComponentCardcontent from "../ComponentCardcontent";
import Image4 from "../../images/image4.jpg";
import ComponentList from "../ComponentList";
import ComponentListitem from "../ComponentListitem";
import Pagination from "./Pagination";
import ComponentButton from "../ComponentButton";


// interface for the props 
interface Props {
    jobs: any;
    sendDataToProfile: (posted: any) => void;
}

// interface for the stte
interface State {
   currentPage: any;
   jobsPerPage: any;
   postedJobs : any;
   clicked: boolean;
   clickedValue: any;
   sortedJobs: any;
   sorted: boolean;
}

class BlockWrapper extends PureComponent<WithStyles<typeof styles> & any, State> {
    public state: State = {
       currentPage: 1,
       jobsPerPage: 3,
       postedJobs: [],
       clicked: false,
       clickedValue : "",
       sortedJobs : [],
       sorted: false,

    };
    // function that handles pagination
    private paginate = (pageNumber:any) => {
        this.setState({
            currentPage: pageNumber
        })
    };
    // function that sends the posted jobs to the profile component
    private postForJobs = (id:any) => {
        const posted = this.state.postedJobs;
        posted.push(id);
        const {AuthSuccess} = this.props;
        if(AuthSuccess === "Auth Success") {
            this.setState({
                ...this.state,
                postedJobs: posted,
                clicked: true,
                clickedValue: id,
            });
            const {sendDataToProfile} = this.props;
            sendDataToProfile(posted);
        }
        
        
    };
    // function that handles sorting of the jobs
    private sortAsc = () => {
        const {jobs} = this.props;
        const newJobsDateChanged = jobs.map((item:any) => {
            const  newDateFormat = parseInt(item['createdAt'].match(/[1-9]/g).join(""))
            item['createdAt'] = newDateFormat;
            return item;
        });
        console.log(newJobsDateChanged);
        const sortedJobs = newJobsDateChanged.sort((a:any, b:any) => {
                return a.createdAt - b.createdAt;
        });
        this.setState({
            ...this.state,
            sortedJobs: sortedJobs,
            sorted: true,
        });
    }
    public render() {
        const { classes, jobs, AuthSuccess } = this.props;
        const totalJobs = jobs.length;
        const {currentPage, jobsPerPage, clicked, postedJobs, clickedValue, sortedJobs, sorted} = this.state;
        const indexOfLastJob = currentPage * jobsPerPage;
        const indexOfFirstJob = indexOfLastJob - jobsPerPage;
        const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
        const currentSortedJobs = sortedJobs.slice(indexOfFirstJob, indexOfLastJob);
        const {paginate, postForJobs, sortAsc} = this;
        return (
          <ComponentHome
            classes={classes}
            jobs={jobs}
            currentJobs={currentJobs}
            jobsPerPage={jobsPerPage}
            totalJobs={totalJobs}
            postForJobs={postForJobs}
            paginate={paginate}
            clicked={clicked}
            postedJobs={postedJobs}
            clickedValue={clickedValue}
            sortAsc={sortAsc}
            currentSortedJobs={currentSortedJobs}
            sorted={sorted}
            AuthSuccess={AuthSuccess}
          />
        );
    } 
}

const ComponentHome = ({ classes, currentJobs, jobsPerPage, totalJobs, postForJobs, paginate, clicked,clickedValue,sortAsc, currentSortedJobs, sorted,AuthSuccess }: any) => {
    const jobWrapper = sorted ? (currentSortedJobs.map((item:any) => {
        return(
            <ComponentList key={item._id} className={classes.positionCards}>
                <ComponentListitem>
                    <ComponentCard className={classes.Jobs} classes={{ root: classes.card }}>
                        <Grid container>
                            <Grid item xs={12} sm={2}>
                                <img src={Image4} alt="this is logo" className={classes.Image1}/>
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
                                    {
                                        clicked && item._id === clickedValue ?  
                                        (
                                            <ComponentButton color="primary" variant="contained" onClick={() => {postForJobs(item._id)}}>
                                                <span>
                                                    postulé
                                                </span>
                                            </ComponentButton>
                                        ) : (
                                            <ComponentButton color="secondary" variant="contained" onClick={() => {postForJobs(item._id)}}>
                                                <span>
                                                    postuler
                                                </span>
                                            </ComponentButton>
                                        )
                                    }
                                </div>   
                            </Grid>
                        </Grid>
                    </ComponentCard>
                </ComponentListitem>
            </ComponentList>
        )
    })) : (
        currentJobs.map((item:any) => {
            return(
                <ComponentList key={item._id} className={classes.positionCards}>
                    <ComponentListitem>
                        <ComponentCard className={classes.Jobs} classes={{ root: classes.card }}>
                            <Grid container>
                                <Grid item xs={12} sm={2}>
                                    <img src={Image4} alt="this is logo" className={classes.Image1}/>
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
                                        {
                                            clicked && item._id === clickedValue ?  
                                            (
                                                <ComponentButton color="primary" variant="contained" onClick={() => {postForJobs(item._id)}}>
                                                    <span>
                                                        postulé
                                                    </span>
                                                </ComponentButton>
                                            ) : (
                                                <ComponentButton color="secondary" variant="contained" onClick={() => {postForJobs(item._id)}}>
                                                    <span>
                                                        postuler
                                                    </span>
                                                </ComponentButton>
                                            )
                                        }
                                    </div>   
                                </Grid>
                            </Grid>
                        </ComponentCard>
                    </ComponentListitem>
                </ComponentList>
            )
        })
    )
    return (
      <div>
        <div className={classes.positionInPage}>
            <div className={classes.trier}>
                <ComponentButton onClick={sortAsc}>
                    <span className={classes.positionTrier}>
                        Trier par date d'ajout asc 
                    </span>   
                </ComponentButton>
            </div>
            {jobWrapper}
            <Pagination
                jobsPerPage={jobsPerPage}
                totalJobs={totalJobs}
                paginate={paginate}
            />
        </div>
      </div>
    );
};
export default withStyles(styles)(BlockWrapper);