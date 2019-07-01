import {
  GET_TOP_RATED_START,
  GET_TOP_RATED_SUCCESS,
  GET_TOP_RATED_FAILURE,
  GET_NOW_PLAYING_START,
  GET_NOW_PLAYING_SUCCESS,
  GET_NOW_PLAYING_FAILURE,
  GET_UPCOMING_START,
  GET_UPCOMING_SUCCESS,
  GET_UPCOMING_FAILURE,
  GET_POPULAR_START,
  GET_POPULAR_SUCCESS,
  GET_POPULAR_FAILURE,
  GET_SINGLE_MOVIE_START,
  GET_SINGLE_MOVIE_SUCCESS,
  GET_SINGLE_MOVIE_FAILURE,
  GET_SINGLE_QUERY_START,
  GET_SINGLE_QUERY_SUCCESS,
  GET_SINGLE_QUERY_FAILURE,
} from '../actions/movieAction';

const initialState = {
  isLoading: false,
  errors: {},
  topRated: [],
  nowPlaying: [],
  upcoming: [],
  popular: [],
  movie: [],
  trailerQuery: [],
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    // ------------------------------------ GET_TOP_RATED ------------------------------------
    case GET_TOP_RATED_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TOP_RATED_SUCCESS:
      return {
        ...state,
        topRated: action.payload,
        isLoading: false,
      };
    case GET_TOP_RATED_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    // ------------------------------------ GET_NOW_PLAYING ------------------------------------
    case GET_NOW_PLAYING_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_NOW_PLAYING_SUCCESS:
      return {
        ...state,
        nowPlaying: action.payload,
        isLoading: false,
      };
    case GET_NOW_PLAYING_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    // ------------------------------------ GET_UPCOMING ------------------------------------
    case GET_UPCOMING_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_UPCOMING_SUCCESS:
      return {
        ...state,
        upcoming: action.payload,
        isLoading: false,
      };
    case GET_UPCOMING_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    // ------------------------------------ GET_POPULAR ------------------------------------
    case GET_POPULAR_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_POPULAR_SUCCESS:
      return {
        ...state,
        popular: action.payload,
        isLoading: false,
      };
    case GET_POPULAR_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    // ------------------------------------ GET_POPULAR ------------------------------------
    case GET_SINGLE_MOVIE_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SINGLE_MOVIE_SUCCESS:
      return {
        ...state,
        movie: action.payload,
        isLoading: false,
      };
    case GET_SINGLE_MOVIE_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    // ------------------------------------ GET_POPULAR ------------------------------------
    case GET_SINGLE_QUERY_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SINGLE_QUERY_SUCCESS:
      return {
        ...state,
        trailerQuery: action.payload,
        isLoading: false,
      };
    case GET_SINGLE_QUERY_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    // ------------------------------------ RETURN STATE ------------------------------------
    default:
      return state;
  }
}
