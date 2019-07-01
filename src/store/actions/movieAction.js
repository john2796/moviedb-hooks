import axios from 'axios';

// const GENRES = 'https://api.themoviedb.org/3/genre/movie/list?api_key=64c2b191aa0739bffd252c8287ae39c1&language=en-US';

// ------------------------------------ GET TOP_RATED ------------------------------------
const TOP_RATED = 'https://api.themoviedb.org/3/movie/top_rated?api_key=64c2b191aa0739bffd252c8287ae39c1&language=en-US&page=1';
export const GET_TOP_RATED_START = 'GET_TOP_RATED_START';
export const GET_TOP_RATED_SUCCESS = 'GET_TOP_RATED_SUCCESS';
export const GET_TOP_RATED_FAILURE = 'GET_TOP_RATED_FAILURE';

export const getTopRated = () => async (dispatch) => {
  try {
    dispatch({ type: GET_TOP_RATED_START });
    const response = await axios(TOP_RATED);
    dispatch({ type: GET_TOP_RATED_SUCCESS, payload: response.data.results });
  } catch (error) {
    dispatch({ type: GET_TOP_RATED_FAILURE, payload: error });
  }
};

// ------------------------------------ GET NOW_PLAYING ------------------------------------

const NOW_PLAYING = 'https://api.themoviedb.org/3/movie/now_playing?api_key=64c2b191aa0739bffd252c8287ae39c1&language=en-US&page=1';
export const GET_NOW_PLAYING_START = 'GET_NOW_PLAYING_START';
export const GET_NOW_PLAYING_SUCCESS = 'GET_NOW_PLAYING_SUCCESS';
export const GET_NOW_PLAYING_FAILURE = 'GET_NOW_PLAYING_FAILURE';

export const getNowPlaying = () => async (dispatch) => {
  try {
    dispatch({ type: GET_NOW_PLAYING_START });
    const response = await axios(NOW_PLAYING);
    dispatch({ type: GET_NOW_PLAYING_SUCCESS, payload: response.data.results });
  } catch (error) {
    dispatch({ type: GET_NOW_PLAYING_FAILURE, payload: error });
  }
};

// ------------------------------------ GET UPCOMING ------------------------------------

const UPCOMING = 'https://api.themoviedb.org/3/movie/upcoming?api_key=64c2b191aa0739bffd252c8287ae39c1&language=en-US&page=1';
export const GET_UPCOMING_START = 'GET_UPCOMING_START';
export const GET_UPCOMING_SUCCESS = 'GET_UPCOMING_SUCCESS';
export const GET_UPCOMING_FAILURE = 'GET_UPCOMING_FAILURE';

export const getUpcoming = () => async (dispatch) => {
  try {
    dispatch({ type: GET_UPCOMING_START });
    const response = await axios(UPCOMING);
    dispatch({ type: GET_UPCOMING_SUCCESS, payload: response.data.results });
  } catch (error) {
    dispatch({ type: GET_UPCOMING_FAILURE, payload: error });
  }
};

// ------------------------------------ GET POPULAR ------------------------------------

const POPULAR = 'https://api.themoviedb.org/3/movie/popular?api_key=64c2b191aa0739bffd252c8287ae39c1&language=en-US&page=1';
export const GET_POPULAR_START = 'GET_POPULAR_START';
export const GET_POPULAR_SUCCESS = 'GET_POPULAR_SUCCESS';
export const GET_POPULAR_FAILURE = 'GET_POPULAR_FAILURE';

export const getPopular = () => async (dispatch) => {
  try {
    dispatch({ type: GET_POPULAR_START });
    const response = await axios(POPULAR);
    dispatch({ type: GET_POPULAR_SUCCESS, payload: response.data.results });
  } catch (error) {
    dispatch({ type: GET_POPULAR_FAILURE, payload: error });
  }
};

// ------------------------------------ GET_SINGLE_MOVIE ------------------------------------

export const GET_SINGLE_MOVIE_START = 'GET_SINGLE_MOVIE_START';
export const GET_SINGLE_MOVIE_SUCCESS = 'GET_SINGLE_MOVIE_SUCCESS';
export const GET_SINGLE_MOVIE_FAILURE = 'GET_SINGLE_MOVIE_FAILURE';

export const getSingleMovie = title => async (dispatch) => {
  try {
    dispatch({ type: GET_SINGLE_MOVIE_START });
    const response = await axios(
      `https://api.themoviedb.org/3/search/movie?api_key=64c2b191aa0739bffd252c8287ae39c1&language=en-US&query=${title}`,
    );
    dispatch({ type: GET_SINGLE_MOVIE_SUCCESS, payload: response.data.results });
  } catch (error) {
    dispatch({ type: GET_SINGLE_MOVIE_FAILURE, payload: error });
  }
};
// ------------------------------------ GET_SINGLE_QUERy ------------------------------------

export const GET_SINGLE_QUERY_START = 'GET_SINGLE_QUERY_START';
export const GET_SINGLE_QUERY_SUCCESS = 'GET_SINGLE_QUERY_SUCCESS';
export const GET_SINGLE_QUERY_FAILURE = 'GET_SINGLE_QUERY_FAILURE';

export const getSingleQuery = () => async (dispatch) => {
  try {
    dispatch({ type: GET_SINGLE_QUERY_START });
    const response = await axios(
      'https://api.themoviedb.org/3/movie/429617/videos?api_key=64c2b191aa0739bffd252c8287ae39c1&language=en-US',
    );
    dispatch({ type: GET_SINGLE_QUERY_SUCCESS, payload: response.data.results });
  } catch (error) {
    dispatch({ type: GET_SINGLE_QUERY_FAILURE, payload: error });
  }
};

// ------------------------------------  Dispatch All Movies ------------------------------------
export const getAllMovies = () => (dispatch) => {
  dispatch(getPopular());
  dispatch(getUpcoming());
  dispatch(getNowPlaying());
  dispatch(getTopRated());
};
