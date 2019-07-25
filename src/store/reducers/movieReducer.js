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
  GET_POPULAR_TV_START,
  GET_POPULAR_TV_SUCCESS,
  GET_POPULAR_TV_FAILURE,
  GET_TOP_RATED_TV_START,
  GET_TOP_RATED_TV_SUCCESS,
  GET_TOP_RATED_TV_FAILURE,
  GET_ONTHEAIR_TV_START,
  GET_ONTHEAIR_TV_SUCCESS,
  GET_ONTHEAIR_TV_FAILURE,
  GET_AIRING_TODAY_TV_START,
  GET_AIRING_TODAY_TV_SUCCESS,
  GET_AIRING_TODAY_TV_FAILURE,
  GET_TRENDING_PEOPLE_START,
  GET_TRENDING_PEOPLE_SUCCESS,
  GET_TRENDING_PEOPLE_FAILURE,
  GET_MOVIE_BYID_START,
  GET_MOVIE_BYID_SUCCESS,
  GET_MOVIE_BYID_FAILURE,
  GET_SP_REVIEWS_START,
  GET_SP_REVIEWS_SUCCESS,
  GET_SP_REVIEWS_FAILURE,
  GET_SP_CAST_START,
  GET_SP_CAST_SUCCESS,
  GET_SP_CAST_FAILURE,
  GET_SP_MEDIA_MOVIE_START,
  GET_SP_MEDIA_MOVIE_SUCCESS,
  GET_SP_MEDIA_MOVIE_FAILURE,
  GET_SP_RELATED_MOVIES_START,
  GET_SP_RELATED_MOVIES_SUCCESS,
  GET_SP_RELATED_MOVIES_FAILURE,
  GET_SP_KEYWORD_START,
  GET_SP_KEYWORD_SUCCESS,
  GET_SP_KEYWORD_FAILURE,
} from '../actions/movieAction'

const initialState = {
  isLoading: false,
  relatedMoviesIsLoading: false,
  errors: {},
  topRated: [],
  nowPlaying: [],
  upcoming: [],
  popular: [],
  movie: [],
  trailerQuery: [],
  popularTV: [],
  topRatedTV: [],
  airingToday: [],
  onAirTV: [],
  trendingPeople: [],
  spMovie: [],
  spReviews: [],
  spMediamovie: [],
  spRelatedMovie: [],
  spKeyword: [],
  spCast: [],
  spCrew: [],
}

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    // ----------------- GET_TOP_RATED -----------------
    case GET_TOP_RATED_START:
      return {
        ...state,
        isLoading: true,
      }
    case GET_TOP_RATED_SUCCESS:
      return {
        ...state,
        topRated: action.payload,
        isLoading: false,
      }
    case GET_TOP_RATED_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      }
    // ----------------- GET_NOW_PLAYING -----------------
    case GET_NOW_PLAYING_START:
      return {
        ...state,
        isLoading: true,
      }
    case GET_NOW_PLAYING_SUCCESS:
      return {
        ...state,
        nowPlaying: action.payload,
        isLoading: false,
      }
    case GET_NOW_PLAYING_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      }
    // ----------------- GET_UPCOMING -----------------
    case GET_UPCOMING_START:
      return {
        ...state,
        isLoading: true,
      }
    case GET_UPCOMING_SUCCESS:
      return {
        ...state,
        upcoming: action.payload,
        isLoading: false,
      }
    case GET_UPCOMING_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      }
    // ----------------- GET_POPULAR -----------------
    case GET_POPULAR_START:
      return {
        ...state,
        isLoading: true,
      }
    case GET_POPULAR_SUCCESS:
      return {
        ...state,
        popular: action.payload,
        isLoading: false,
      }
    case GET_POPULAR_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      }
    // ----------------- GET_POPULAR -----------------
    case GET_SINGLE_MOVIE_START:
      return {
        ...state,
        isLoading: true,
      }
    case GET_SINGLE_MOVIE_SUCCESS:
      return {
        ...state,
        movie: action.payload,
        isLoading: false,
      }
    case GET_SINGLE_MOVIE_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      }
    // --------------------- GET_POPULAR ---------------------
    case GET_SINGLE_QUERY_START:
      return {
        ...state,
        isLoading: true,
      }
    case GET_SINGLE_QUERY_SUCCESS:
      return {
        ...state,
        trailerQuery: action.payload,
        isLoading: false,
      }
    case GET_SINGLE_QUERY_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      }
    // --------------------- GET_POPULAR_TV_ SHOWS ---------------------
    case GET_POPULAR_TV_START:
      return {
        ...state,
        isLoading: true,
      }
    case GET_POPULAR_TV_SUCCESS:
      return {
        ...state,
        popularTV: action.payload,
        isLoading: false,
      }
    case GET_POPULAR_TV_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      }
    // --------------------- GET_TOP_RATED_ SHOWS ---------------------
    case GET_TOP_RATED_TV_START:
      return {
        ...state,
        isLoading: true,
      }
    case GET_TOP_RATED_TV_SUCCESS:
      return {
        ...state,
        topRatedTV: action.payload,
        isLoading: false,
      }
    case GET_TOP_RATED_TV_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      }
    // --------------------- GET_AIRING_TODAY_TV SHOWS ---------------------
    case GET_AIRING_TODAY_TV_START:
      return {
        ...state,
        isLoading: true,
      }
    case GET_AIRING_TODAY_TV_SUCCESS:
      return {
        ...state,
        airingToday: action.payload,
        isLoading: false,
      }
    case GET_AIRING_TODAY_TV_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      }
    // --------------------- GET_ONTHEAIR_TV SHOWS ---------------------
    case GET_ONTHEAIR_TV_START:
      return {
        ...state,
        isLoading: true,
      }
    case GET_ONTHEAIR_TV_SUCCESS:
      return {
        ...state,
        onAirTV: action.payload,
        isLoading: false,
      }
    case GET_ONTHEAIR_TV_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      }
    // --------------------- GET_TRENDING_PEOPLE SHOWS ---------------------
    case GET_TRENDING_PEOPLE_START:
      return {
        ...state,
        isLoading: true,
      }
    case GET_TRENDING_PEOPLE_SUCCESS:
      return {
        ...state,
        trendingPeople: action.payload,
        isLoading: false,
      }
    case GET_TRENDING_PEOPLE_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      }
    // --------------------- GET_MOVIE_BYID SHOWS ---------------------
    case GET_MOVIE_BYID_START:
      return {
        ...state,
        isLoading: true,
      }
    case GET_MOVIE_BYID_SUCCESS:
      return {
        ...state,
        spMovie: action.payload,
        isLoading: false,
      }
    case GET_MOVIE_BYID_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      }
    // --------------------- SINGLE PAGE REVIEWS ---------------------
    case GET_SP_REVIEWS_START:
      return {
        ...state,
        isLoading: true,
      }
    case GET_SP_REVIEWS_SUCCESS:
      return {
        ...state,
        spReviews: action.payload,
        isLoading: false,
      }
    case GET_SP_REVIEWS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      }

    // --------------------- SINGLE PAGE CAST ---------------------
    case GET_SP_CAST_START:
      return {
        ...state,
        isLoading: true,
      }
    case GET_SP_CAST_SUCCESS:
      return {
        ...state,
        spCast: action.cast,
        spCrew: action.crew,
        isLoading: false,
      }
    case GET_SP_CAST_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      }
    // --------------------- SINGLE PAGE MEDIA AND MOVIE ---------------------
    case GET_SP_MEDIA_MOVIE_START:
      return {
        ...state,
        isLoading: true,
      }
    case GET_SP_MEDIA_MOVIE_SUCCESS:
      return {
        ...state,
        spMediamovie: action.payload,
        isLoading: false,
      }
    case GET_SP_MEDIA_MOVIE_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      }
    // --------------------- SINGLE PAGE RELATED MOVIES ---------------------
    case GET_SP_RELATED_MOVIES_START:
      return {
        ...state,
        relatedMoviesIsLoading: true,
      }
    case GET_SP_RELATED_MOVIES_SUCCESS:
      return {
        ...state,
        spRelatedMovie: action.payload,
        relatedMoviesIsLoading: false,
      }
    case GET_SP_RELATED_MOVIES_FAILURE:
      return {
        ...state,
        relatedMoviesIsLoading: false,
        errors: action.payload,
      }
    // --------------------- SINGLE PAGE KEYOWRD ---------------------
    case GET_SP_KEYWORD_START:
      return {
        ...state,
        isLoading: true,
      }
    case GET_SP_KEYWORD_SUCCESS:
      return {
        ...state,
        spKeyword: action.payload,
        isLoading: false,
      }
    case GET_SP_KEYWORD_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      }
    // ---------------------- RETURN STATE ----------------------
    default:
      return state
  }
}
