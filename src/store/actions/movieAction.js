import axios from 'axios';

const UPCOMING = 'https://api.themoviedb.org/3/movie/upcoming?api_key=64c2b191aa0739bffd252c8287ae39c1&language=en-US&page=1';
const POPULAR = 'https://api.themoviedb.org/3/movie/popular?api_key=64c2b191aa0739bffd252c8287ae39c1&language=en-US&page=1';

const NOW_PLAYING = 'https://api.themoviedb.org/3/movie/now_playing?api_key=64c2b191aa0739bffd252c8287ae39c1&language=en-US&page=1';
const TOP_RATED = 'https://api.themoviedb.org/3/movie/top_rated?api_key=64c2b191aa0739bffd252c8287ae39c1&language=en-US&page=1';

const GENRES = 'https://api.themoviedb.org/3/genre/movie/list?api_key=64c2b191aa0739bffd252c8287ae39c1&language=en-US';

// ------------------------------------ GET TOP_RATED ------------------------------------
export const GET_TOP_RATED_START = 'GET_TOP_RATED_START';
export const GET_TOP_RATED_SUCCESS = 'GET_TOP_RATED_SUCCESS';
export const GET_TOP_RATED_FAILURE = 'GET_TOP_RATED_FAILURE';

export const getTopRated = () => async (dispatch) => {
  try {
    dispatch({ type: GET_TOP_RATED_START });
    const response = await axios(TOP_RATED);
    const filtered = response.data.results.filter((_, idx) => idx < 5);

    dispatch({ type: GET_TOP_RATED_SUCCESS, payload: filtered });
  } catch (error) {
    dispatch({ type: GET_TOP_RATED_FAILURE, payload: error });
  }
};

// ------------------------------------ GET NOW_PLAYING ------------------------------------

export const GET_NOW_PLAYING_START = 'GET_NOW_PLAYING_START';
export const GET_NOW_PLAYING_SUCCESS = 'GET_NOW_PLAYING_SUCCESS';
export const GET_NOW_PLAYING_FAILURE = 'GET_NOW_PLAYING_FAILURE';

export const getNowPlaying = () => async (dispatch) => {
  try {
    dispatch({ type: GET_NOW_PLAYING_START });
    const response = await axios(NOW_PLAYING);
    const filtered = response.data.results.filter((_, idx) => idx < 5);

    dispatch({ type: GET_NOW_PLAYING_SUCCESS, payload: filtered });
  } catch (error) {
    dispatch({ type: GET_NOW_PLAYING_FAILURE, payload: error });
  }
};

// ------------------------------------ GET UPCOMING ------------------------------------

export const GET_UPCOMING_START = 'GET_UPCOMING_START';
export const GET_UPCOMING_SUCCESS = 'GET_UPCOMING_SUCCESS';
export const GET_UPCOMING_FAILURE = 'GET_UPCOMING_FAILURE';

export const getUpcoming = () => async (dispatch) => {
  try {
    dispatch({ type: GET_UPCOMING_START });
    const response = await axios(UPCOMING);
    const filtered = response.data.results.filter((_, idx) => idx < 5);
    dispatch({ type: GET_UPCOMING_SUCCESS, payload: filtered });
  } catch (error) {
    dispatch({ type: GET_UPCOMING_FAILURE, payload: error });
  }
};

// ------------------------------------ GET UPCOMING ------------------------------------

export const GET_POPULAR_START = 'GET_POPULAR_START';
export const GET_POPULAR_SUCCESS = 'GET_POPULAR_SUCCESS';
export const GET_POPULAR_FAILURE = 'GET_POPULAR_FAILURE';

export const getPopular = () => async (dispatch) => {
  try {
    dispatch({ type: GET_POPULAR_START });
    const response = await axios(POPULAR);
    const filtered = response.data.results.filter((_, idx) => idx < 5);

    dispatch({ type: GET_POPULAR_SUCCESS, payload: filtered });
  } catch (error) {
    dispatch({ type: GET_POPULAR_FAILURE, payload: error });
  }
};

// ------------------------------------  Dispatch All Movies ------------------------------------
export const getAllMovies = () => (dispatch) => {
  dispatch(getPopular());
  dispatch(getUpcoming());
  dispatch(getNowPlaying());
  dispatch(getTopRated());
};
