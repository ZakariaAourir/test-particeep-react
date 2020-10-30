import { createSelector } from 'reselect';
import o8 from "../../images/o8.jpg";
import mid from "../../images/mid.jpg";
import gone from "../../images/gone.jpg";
import pulp from "../../images/pulp.jpg";
import seven from "../../images/seven.jpg";
import sans from "../../images/sans.jpg";
import les from "../../images/les.jpg";
import creed from "../../images/creed.jpg";
import incep from "../../images/incep.jpg";




export const DEFAULT_STATE = {
    movies: [
        {
            id: '1',
            title: 'Oceans 8',
            category: 'Comedy',
            likes: 4,
            dislikes: 1,
            pic: o8
          }, {
            id: '2',
            title: 'Midnight Sun',
            category: 'Comedy',
            likes: 2,
            dislikes: 0,
            pic: mid
          }, {
            id: '3',
            title: 'Les indestructibles 2',
            category: 'Animation',
            likes: 3,
            dislikes: 1,
            pic: les
          }, {
            id: '4',
            title: 'Sans un bruit',
            category: 'Thriller',
            likes: 6,
            dislikes: 6,
            pic: sans
          }, {
            id: '5',
            title: 'Creed II',
            category: 'Drame',
            likes: 16,
            dislikes: 2,
            pic: creed
          }, {
            id: '6',
            title: 'Pulp Fiction',
            category: 'Thriller',
            likes: 11,
            dislikes: 3,
            pic: pulp
          }, {
            id: '7',
            title: 'Pulp Fiction',
            category: 'Thriller',
            likes: 33,
            dislikes: 32,
            pic: pulp
          }, {
            id: '8',
            title: 'Seven',
            category: 'Thriller',
            likes: 2,
            dislikes: 1,
            pic: seven
          }, {
            id: '9',
            title: 'Inception',
            category: 'Thriller',
            likes: 2,
            dislikes: 1,
            pic: incep
          }, {
            id: '10',
            title: 'Gone Girl',
            category: 'Thriller',
            likes: 22,
            dislikes: 12,
            pic: gone
          },
    ]
};

// do this in the service result of the service in reducer
const getStateSelector = (globalState: any) => globalState.moviesInfo;
export const MoviesSelector = createSelector(getStateSelector, () => {
  return DEFAULT_STATE.movies;
});