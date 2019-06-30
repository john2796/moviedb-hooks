import {
  GET_TOP_RATED_START,
  GET_TOP_RATED_SUCCESS,
  GET_TOP_RATED_FAILURE,
  GET_NOW_PLAYING_START,
  GET_NOW_PLAYING_SUCCESS,
  GET_NOW_PLAYING_FAILURE,
} from '../actions/movieAction';

const initialState = {
  isLoading: false,
  errors: {},
  topRated: [],
  nowPlaying: [],
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
    default:
      return state;
  }
}
