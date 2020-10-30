import React from "react";
import {  withStyles } from '@material-ui/core';
import styles from "./styles";

const Pagination = ({classes, moviesPerPage, totalMovies, paginate}) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalMovies/moviesPerPage); i++){
        pageNumbers.push(i);
    };
    return(
        <div className={classes.positionWholePag}>
            {
                pageNumbers.map(number => (
                    <div key={number} className={classes.positionPagination}>
                        <a onClick={() => paginate(number)} href="#" className={classes.pagination}>
                            <div className={classes.Box}>
                                {number}
                            </div>
                        </a>
                    </div>
                ))
            }
        </div>
    )
};

export default withStyles(styles)(Pagination);