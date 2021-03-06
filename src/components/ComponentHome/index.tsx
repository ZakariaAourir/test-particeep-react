import React, { PureComponent } from 'react';
import styles from './styles';
import {  Checkbox, FormControl, Icon, Input, InputLabel, ListItemText, MenuItem, Select, WithStyles, withStyles } from '@material-ui/core';
import ComponentCard from "../ComponentCard";
import ComponentCardcontent from "../ComponentCardcontent";
import Pagination from "./Pagination";
import ComponentButton from "../ComponentButton";
import ComponentCardmedia from '../ComponentCardmedia';
import ComponentTypography from '../ComponentTypography';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// interface for the props 
interface Props {
  deleteMovie: (id:any) => void;
  movies: any;
  selectedMovies:any;
  addLikes: (id:any) => void;
  addDisLikes: (id:any) => void;
}

// interface for the stte
interface State {
  currentPage: any;
  moviesPerPage: any;
  likeClicked: boolean;
  disLikeClicked: boolean;
}

class BlockWrapper extends PureComponent<WithStyles<typeof styles> & any, State> {
    
  public state: State = {
    currentPage: 1,
    moviesPerPage: 3,
    likeClicked: false,
    disLikeClicked: false,

  };
  private paginate = (pageNumber:any) => {
    this.setState({
        currentPage: pageNumber
    })
  };
  private deleteMovie = (id:any) => {
    const {deleteMovie} = this.props;
    deleteMovie(id);
    window.alert("Movie Deleted")
  };
  private handleLikes = (id:any) => {
    console.log("like is clicked ")
    this.setState({
      ...this.state,
      likeClicked: true,
    })
    const {addLikes} = this.props;
    addLikes(id);
  };
  private handleDisLikes = (id:any) => {
    this.setState({
      ...this.state,
      disLikeClicked: true,
    })
    const {addDisLikes} = this.props;
    addDisLikes(id);
  };
  public render() {
      const { classes , movies, selectedMovies} = this.props;
      const totalMovies = movies.length;
      const {currentPage, moviesPerPage, likeClicked, disLikeClicked} = this.state;
      const indexOfLastMovie = currentPage * moviesPerPage;
      const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
      const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
      const {paginate, deleteMovie, handleLikes, handleDisLikes} = this;
      return (
        <ComponentHome
          classes={classes}
          movies={movies}
          totalMovies={totalMovies}
          moviesPerPage={moviesPerPage}
          paginate={paginate}
          currentMovies={currentMovies}
          deleteMovie={deleteMovie}
          handleLikes={handleLikes}
          handleDisLikes={handleDisLikes}
          likeClicked={likeClicked}
          disLikeClicked={disLikeClicked}

        />
      );
  } 
}

const ComponentHome = ({ classes, movies, totalMovies, moviesPerPage, paginate, currentMovies, deleteMovie, handleLikes, handleDisLikes, likeClicked, disLikeClicked }: any) => {
    const moviesList = movies.length ? (
      currentMovies.map((movie:any) => {
        console.log(movies);
        return (
          <div key={movie.id} className={classes.cardWrapper}>
            <div>
              <ComponentCard className={classes.root}>
                  <ComponentCardmedia className={classes.cardMedia} image={movie.pic}/>
                  <ComponentCardcontent>
                    <div className={classes.fixOnContent}>
                      <div>
                        <div className={classes.title}> 
                          <ComponentTypography color="primary" variant="fs_2_2" weight="semi-bold" >{movie.title}</ComponentTypography>
                        </div>
                        <div className={classes.category}>
                          <ComponentTypography variant="comment" color="secondary">{movie.category}</ComponentTypography>
                        </div>
                      </div>
                      <div className={classes.fixOnContent}>
                        {
                          disLikeClicked? (
                            <Icon className={classes.iconSvgDislike}>
                              <svg className={classes.iconImg} id="Bold" xmlns="http://www.w3.org/2000/svg">
                                <path d="m1.75 23h2.5c.965 0 1.75-.785 1.75-1.75v-11.5c0-.965-.785-1.75-1.75-1.75h-2.5c-.965 0-1.75.785-1.75 1.75v11.5c0 .965.785 1.75 1.75 1.75z"/><path d="m12.781.75c-1 0-1.5.5-1.5 3 0 2.376-2.301 4.288-3.781 5.273v12.388c1.601.741 4.806 1.839 9.781 1.839h1.6c1.95 0 3.61-1.4 3.94-3.32l1.12-6.5c.42-2.45-1.46-4.68-3.94-4.68h-4.72s.75-1.5.75-4c0-3-2.25-4-3.25-4z"/>
                              </svg>
                            </Icon>
                          ) : (
                            <a href="#" onClick={() => {handleLikes(movie.id)}}>
                              <Icon className={classes.iconSvgDislike}>
                                <svg className={classes.iconImg} id="Bold" xmlns="http://www.w3.org/2000/svg">
                                  <path d="m1.75 23h2.5c.965 0 1.75-.785 1.75-1.75v-11.5c0-.965-.785-1.75-1.75-1.75h-2.5c-.965 0-1.75.785-1.75 1.75v11.5c0 .965.785 1.75 1.75 1.75z"/><path d="m12.781.75c-1 0-1.5.5-1.5 3 0 2.376-2.301 4.288-3.781 5.273v12.388c1.601.741 4.806 1.839 9.781 1.839h1.6c1.95 0 3.61-1.4 3.94-3.32l1.12-6.5c.42-2.45-1.46-4.68-3.94-4.68h-4.72s.75-1.5.75-4c0-3-2.25-4-3.25-4z"/>
                                </svg>
                              </Icon>
                            </a>
                          ) 
                        }
                        <div className={classes.dislike}>
                          <ComponentTypography color="secondary" className={classes.disLike}>{movie.likes}</ComponentTypography>  
                        </div>
                      </div>
                      <div className={classes.fixOnContent}> 
                        {
                          likeClicked ? (
                            <Icon className={classes.iconSvg}>
                              <svg className={classes.iconImgDislike} id="Bold" xmlns="http://www.w3.org/2000/svg">
                                <path d="m22.25 1h-2.5c-.965 0-1.75.785-1.75 1.75v11.5c0 .965.785 1.75 1.75 1.75h2.5c.965 0 1.75-.785 1.75-1.75v-11.5c0-.965-.785-1.75-1.75-1.75z"/><path d="m5.119.75c-1.95 0-3.61 1.4-3.94 3.32l-1.12 6.5c-.42 2.45 1.46 4.68 3.94 4.68h4.72s-.75 1.5-.75 4c0 3 2.25 4 3.25 4s1.5-.5 1.5-3c0-2.376 2.301-4.288 3.781-5.273v-12.388c-1.601-.741-4.806-1.839-9.781-1.839z"/>
                              </svg>
                            </Icon>
                          ) : (
                            <a href="#" onClick={() => {handleDisLikes(movie.id)}}>
                              <Icon className={classes.iconSvg}>
                                <svg className={classes.iconImgDislike} id="Bold" xmlns="http://www.w3.org/2000/svg">
                                  <path d="m22.25 1h-2.5c-.965 0-1.75.785-1.75 1.75v11.5c0 .965.785 1.75 1.75 1.75h2.5c.965 0 1.75-.785 1.75-1.75v-11.5c0-.965-.785-1.75-1.75-1.75z"/><path d="m5.119.75c-1.95 0-3.61 1.4-3.94 3.32l-1.12 6.5c-.42 2.45 1.46 4.68 3.94 4.68h4.72s-.75 1.5-.75 4c0 3 2.25 4 3.25 4s1.5-.5 1.5-3c0-2.376 2.301-4.288 3.781-5.273v-12.388c-1.601-.741-4.806-1.839-9.781-1.839z"/>
                                </svg>
                              </Icon>
                             </a>
                          )
                        }
                        
                        <div className={classes.like}>
                          <ComponentTypography color="secondary" className={classes.disLike}>{movie.dislikes}</ComponentTypography>
                        </div>
                      </div>
                    </div>
                    <ComponentButton variant="outlined" onClick={() => {deleteMovie(movie.id)}}>Delete</ComponentButton>
                  </ComponentCardcontent>
              </ComponentCard>
            </div>
          </div>
        )
      })
    ) : (
      <div> No movies</div>
    )
    return (
      <div className={classes.moviesContainer}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-checkbox-label">Tag</InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            // multiple
            // value={personName}
            // onChange={handleChange}
            input={<Input />}
            renderValue={(selected) => (selected as string[]).join(', ')}
            MenuProps={MenuProps}
          >
            {movies.map((movie:any) => (
              <MenuItem key={movie.id} value={movies.category}>
                <Checkbox />
                <ListItemText primary={movies.category} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
          <div className={classes.positionCards}>
            {moviesList}
          </div>
          <Pagination totalMovies={totalMovies} moviesPerPage={moviesPerPage} paginate={paginate} />
      
      </div>
    );
};
export default withStyles(styles)(BlockWrapper);