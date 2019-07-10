import axios from 'axios';


// ------------------------------------ GET TOP_RATED ------------------------------------
const TOP_RATED = 'https://api.themoviedb.org/3/movie/top_rated?api_key=64c2b191aa0739bffd252c8287ae39c1&language=en-US&page=1';
export const GET_TOP_RATED_START = 'GET_TOP_RATED_START';
export const GET_TOP_RATED_SUCCESS = 'GET_TOP_RATED_SUCCESS';
export const GET_TOP_RATED_FAILURE = 'GET_TOP_RATED_FAILURE';

export const getTopRated = () => async (dispatch) => {
  try {
    dispatch({ type: GET_TOP_RATED_START });
    const response = await axios(TOP_RATED);
    const filtered = response.data.results.filter((_, idx) => idx <= 7);
    dispatch({ type: GET_TOP_RATED_SUCCESS, payload: filtered });
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
    const filtered = response.data.results.filter((_, idx) => idx <= 7);
    dispatch({ type: GET_NOW_PLAYING_SUCCESS, payload: filtered });
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
    const filtered = response.data.results.filter((_, idx) => idx <= 7);
    dispatch({ type: GET_UPCOMING_SUCCESS, payload: filtered });
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
    const filtered = response.data.results.filter((_, idx) => idx <= 7);
    dispatch({ type: GET_POPULAR_SUCCESS, payload: filtered });
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

// ------------------------------------ GET POPULAR TV SHOWS ------------------------------------

const POPULAR_TV = 'https://api.themoviedb.org/3/tv/popular?api_key=64c2b191aa0739bffd252c8287ae39c1&language=en-US&page=1';
export const GET_POPULAR_TV_START = 'GET_POPULAR_TV_START';
export const GET_POPULAR_TV_SUCCESS = 'GET_POPULAR_TV_SUCCESS';
export const GET_POPULAR_TV_FAILURE = 'GET_POPULAR_TV_FAILURE';

export const getPopularTv = () => async (dispatch) => {
  try {
    dispatch({ type: GET_POPULAR_TV_START });
    const response = await axios(POPULAR_TV);
    const filtered = response.data.results.filter((_, idx) => idx <= 7);
    dispatch({ type: GET_POPULAR_TV_SUCCESS, payload: filtered });
  } catch (error) {
    dispatch({ type: GET_POPULAR_TV_FAILURE, payload: error });
  }
};
// ------------------------------------ GET TOP_RATED TV SHOWS ------------------------------------

const TOP_RATED_TV = 'https://api.themoviedb.org/3/tv/top_rated?api_key=64c2b191aa0739bffd252c8287ae39c1&language=en-US&page=1';
export const GET_TOP_RATED_TV_START = 'GET_TOP_RATED_TV_START';
export const GET_TOP_RATED_TV_SUCCESS = 'GET_TOP_RATED_TV_SUCCESS';
export const GET_TOP_RATED_TV_FAILURE = 'GET_TOP_RATED_TV_FAILURE';

export const getTopRatedTv = () => async (dispatch) => {
  try {
    dispatch({ type: GET_TOP_RATED_TV_START });
    const response = await axios(TOP_RATED_TV);
    const filtered = response.data.results.filter((_, idx) => idx <= 7);
    dispatch({ type: GET_TOP_RATED_TV_SUCCESS, payload: filtered });
  } catch (error) {
    dispatch({ type: GET_TOP_RATED_TV_FAILURE, payload: error });
  }
};

// ------------------------------------ GET AIRING_TODAY TV SHOWS --------------------------------
const AIRING_TODAY_TV = 'https://api.themoviedb.org/3/tv/airing_today?api_key=64c2b191aa0739bffd252c8287ae39c1&language=en-US&page=1';
export const GET_AIRING_TODAY_TV_START = 'GET_AIRING_TODAY_TV_START';
export const GET_AIRING_TODAY_TV_SUCCESS = 'GET_AIRING_TODAY_TV_SUCCESS';
export const GET_AIRING_TODAY_TV_FAILURE = 'GET_AIRING_TODAY_TV_FAILURE';

export const getAiringTodayTV = () => async (dispatch) => {
  try {
    dispatch({ type: GET_AIRING_TODAY_TV_START });
    const response = await axios(AIRING_TODAY_TV);
    const filtered = response.data.results.filter((_, idx) => idx <= 7);
    dispatch({ type: GET_AIRING_TODAY_TV_SUCCESS, payload: filtered });
  } catch (error) {
    dispatch({ type: GET_AIRING_TODAY_TV_FAILURE, payload: error });
  }
};
// ------------------------------------ GET ONTHEAIR TV SHOWS ------------------------------------

const ONTHEAIR_TV = 'https://api.themoviedb.org/3/tv/on_the_air?api_key=64c2b191aa0739bffd252c8287ae39c1&language=en-US&page=1';
export const GET_ONTHEAIR_TV_START = 'GET_ONTHEAIR_TV_START';
export const GET_ONTHEAIR_TV_SUCCESS = 'GET_ONTHEAIR_TV_SUCCESS';
export const GET_ONTHEAIR_TV_FAILURE = 'GET_COMING_SOON_TV_FAILURE';

export const getOntheAir = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ONTHEAIR_TV_START });
    const response = await axios(ONTHEAIR_TV);
    const filtered = response.data.results.filter((_, idx) => idx <= 7);
    dispatch({ type: GET_ONTHEAIR_TV_SUCCESS, payload: filtered });
  } catch (error) {
    dispatch({ type: GET_ONTHEAIR_TV_FAILURE, payload: error });
  }
};

// ------------------------------------ GET TRENDING PEOPLE ------------------------------------

const TRENDING_PEOPLE = 'https://api.themoviedb.org/3/trending/person/day?api_key=64c2b191aa0739bffd252c8287ae39c1';
export const GET_TRENDING_PEOPLE_START = 'GET_TRENDING_PEOPLE_START';
export const GET_TRENDING_PEOPLE_SUCCESS = 'GET_TRENDING_PEOPLE_SUCCESS';
export const GET_TRENDING_PEOPLE_FAILURE = 'GET_COMING_SOON_TV_FAILURE';

export const getTrendingPeople = () => async (dispatch) => {
  try {
    dispatch({ type: GET_TRENDING_PEOPLE_START });
    const response = await axios(TRENDING_PEOPLE);
    const filtered = response.data.results.filter((_, idx) => idx <= 3);
    dispatch({ type: GET_TRENDING_PEOPLE_SUCCESS, payload: filtered });
  } catch (error) {
    dispatch({ type: GET_TRENDING_PEOPLE_FAILURE, payload: error });
  }
};

// ------------------------------------ GET MOVIE BY ID  ------------------------------------
export const GET_MOVIE_BYID_START = 'GET_MOVIE_BYID_START';
export const GET_MOVIE_BYID_SUCCESS = 'GET_MOVIE_BYID_SUCCESS';
export const GET_MOVIE_BYID_FAILURE = 'GET_MOVIE_BYID_FAILURE';

export const getMovieById = id => async (dispatch) => {
  try {
    dispatch({ type: GET_MOVIE_BYID_START });
    const response = await axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=64c2b191aa0739bffd252c8287ae39c1&language=en-US`,
    );
    dispatch({ type: GET_MOVIE_BYID_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_MOVIE_BYID_FAILURE, payload: error });
  }
};

// ----------- THINGS NEEDED FOR SINGLE PAGE MOVIE ----------------

// -------------------------- GET SINGLE PAGE MOVIE REVIEWS  ----------------------------
export const GET_SP_REVIEWS_START = 'GET_SP_REVIEWS_START';
export const GET_SP_REVIEWS_SUCCESS = 'GET_SP_REVIEWS_SUCCESS';
export const GET_SP_REVIEWS_FAILURE = 'GET_SP_REVIEWS_FAILURE';

export const getSpReviews = id => async (dispatch) => {
  try {
    dispatch({ type: GET_SP_REVIEWS_START });
    const response = await axios(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=64c2b191aa0739bffd252c8287ae39c1&language=en-US&page=1`,
    );
    dispatch({ type: GET_SP_REVIEWS_SUCCESS, payload: response.data.results });
  } catch (error) {
    dispatch({ type: GET_SP_REVIEWS_FAILURE, payload: error });
  }
};
// -------------------------- GET SINGLE PAGE MOVIE CAST  ----------------------------
export const GET_SP_CAST_START = 'GET_SP_CAST_START';
export const GET_SP_CAST_SUCCESS = 'GET_SP_CAST_SUCCESS';
export const GET_SP_CAST_FAILURE = 'GET_SP_CAST_FAILURE';

export const getSpCast = id => async (dispatch) => {
  try {
    dispatch({ type: GET_SP_CAST_START });
    const response = await axios(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=64c2b191aa0739bffd252c8287ae39c1`,
    );
    dispatch({
      type: GET_SP_CAST_SUCCESS,
      cast: response.data.cast,
      crew: response.data.crew,
    });
  } catch (error) {
    dispatch({ type: GET_SP_CAST_FAILURE, payload: error });
  }
};
// -------------------------- GET SINGLE PAGE MOVIE MEDIA&MOVIES  ----------------------------
export const GET_SP_MEDIA_MOVIE_START = 'GET_SP_MEDIA_MOVIE_START';
export const GET_SP_MEDIA_MOVIE_SUCCESS = 'GET_SP_MEDIA_MOVIE_SUCCESS';
export const GET_SP_MEDIA_MOVIE_FAILURE = 'GET_SP_MEDIA_MOVIE_FAILURE';

export const getSpMediaMovies = id => async (dispatch) => {
  try {
    dispatch({ type: GET_SP_MEDIA_MOVIE_START });
    const response = await axios(
      ` https://api.themoviedb.org/3/movie/${id}/videos?api_key=64c2b191aa0739bffd252c8287ae39c1&language=en-US`,
    );
    dispatch({ type: GET_SP_MEDIA_MOVIE_SUCCESS, payload: response.data.results });
  } catch (error) {
    dispatch({ type: GET_SP_MEDIA_MOVIE_FAILURE, payload: error });
  }
};
// ------------------- GET SINGLE PAGE MOVIE RELATED MOVIES  ------------------
export const GET_SP_RELATED_MOVIES_START = 'GET_SP_RELATED_MOVIES_START';
export const GET_SP_RELATED_MOVIES_SUCCESS = 'GET_SP_RELATED_MOVIES_SUCCESS';
export const GET_SP_RELATED_MOVIES_FAILURE = 'GET_SP_RELATED_MOVIES_FAILURE';

export const getSpRelatedMovies = id => async (dispatch) => {
  try {
    dispatch({ type: GET_SP_RELATED_MOVIES_START });
    const response = await axios(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=64c2b191aa0739bffd252c8287ae39c1&language=en-US&page=1`,
    );
    dispatch({ type: GET_SP_RELATED_MOVIES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_SP_RELATED_MOVIES_FAILURE, payload: error });
  }
};
// ------------------- GET SINGLE PAGE MOVIE KEYWORDS  ------------------
export const GET_SP_KEYWORD_START = 'GET_SP_KEYWORD_START';
export const GET_SP_KEYWORD_SUCCESS = 'GET_SP_KEYWORD_SUCCESS';
export const GET_SP_KEYWORD_FAILURE = 'GET_SP_KEYWORD_FAILURE';

export const getSpKeyword = id => async (dispatch) => {
  try {
    dispatch({ type: GET_SP_KEYWORD_START });
    const response = await axios(
      `https://api.themoviedb.org/3/movie/${id}/keywords?api_key=64c2b191aa0739bffd252c8287ae39c1`,
    );
    dispatch({ type: GET_SP_KEYWORD_SUCCESS, payload: response.data.keywords });
  } catch (error) {
    dispatch({ type: GET_SP_KEYWORD_FAILURE, payload: error });
  }
};

// ------------------------------------  Dispatch All Movies ------------------------------------
export const getAllMovies = () => (dispatch) => {
  dispatch(getPopular());
  dispatch(getUpcoming());
  dispatch(getNowPlaying());
  dispatch(getTopRated());
};

export const getPopularTVandMovies = () => (dispatch) => {
  dispatch(getPopular());
  dispatch(getPopularTv());
};

export const getSpOverviewData = id => (dispatch) => {
  dispatch(getMovieById(id));
  dispatch(getSpReviews(id));
  dispatch(getSpCast(id));
  dispatch(getSpMediaMovies(id));
  dispatch(getSpRelatedMovies(id));
  dispatch(getSpKeyword(id));
};
