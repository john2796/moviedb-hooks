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
} from '../actions/movieAction';

const initialState = {
  isLoading: false,
  errors: {},
  topRated: [],
  nowPlaying: [],
  upcoming: [],
  popular: [],
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
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
    default:
      return state;
  }
}
