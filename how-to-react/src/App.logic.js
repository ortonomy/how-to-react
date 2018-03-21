// library dependencies
import { createLogic } from 'redux-logic';
import Axios from 'axios';

export const getMoviesLogic = createLogic(
  {
    type: 'GET_MOVIES',
    validate: ({ action }, allow, reject) => { // always goes through to reducer
      if ( action.type !== 'GET_MOVIES' ) {
        reject();
      }
      allow(action);
    },
    process: ({ action }, dispatch, done) => { // side effects of action
      Axios.all([
        Axios.get('https://api.themoviedb.org/3/discover/movie?api_key=6f2b8b61c03afbeccc25962cf9ed8f5b&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2018'),
        Axios.get('https://api.themoviedb.org/3/configuration?api_key=6f2b8b61c03afbeccc25962cf9ed8f5b')
      ])
      .then( Axios.spread( (movies, config) => {
        dispatch({
          type: 'GET_MOVIES_SUCCESS',
          payload: { movies: movies.data.results, imageUrl: config.data.images.base_url + config.data.images.poster_sizes[0]}
        });
      }))
      .catch( err => {
        dispatch({
          type: 'GET_MOVIES_FAIL',
          payload: err.message,
          err: true
        });
      })
    }
  }
)

export default [
  getMoviesLogic
]