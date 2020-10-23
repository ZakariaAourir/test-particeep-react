import React from "react";
import {  withStyles } from '@material-ui/core';
import styles from "./styles";

const Pagination = ({classes, jobsPerPage, totalJobs, paginate}) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalJobs/jobsPerPage); i++){
        pageNumbers.push(i);
    };
    return(
        <nav>
            <ul className={classes.pagination}>
                {
                    pageNumbers.map(number => (
                        <li key={number}>
                            <a onClick={() => paginate(number)} href="#" className={classes.linkPage}>
                                <div className={classes.Box}>
                                    {number}
                                </div>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
};

export default withStyles(styles)(Pagination);