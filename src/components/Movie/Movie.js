import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { MovieStyle } from './MovieStyle';
import { getSingleMovie } from '../../store/actions/movieAction';

const Movie = ({ match }) => {
  const { movie } = useSelector(state => state.movieReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const { id } = match.params;
    dispatch(getSingleMovie(id));
  }, [dispatch, match.params]);

  const m = movie.length && movie[0];
  return (
    <MovieStyle>
      <div
        className="sp-movie-wrap"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${m.poster_path})`,
        }}
      >
        <div className="sp-top-icons">
          <span>left side</span>
          <span>right side</span>
        </div>
        <div className="sp-content">
          <div className="sp-inner">
            <div className="sp-flex">
              <img src={`https://image.tmdb.org/t/p/w500${m.backdrop_path}`} alt="" />

              <div className="sp-left-side">
                <h2>{m.title}</h2>
                <p>
                  vote_average:
                  {m.vote_average}
                </p>
                <p>genre goes here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MovieStyle>
  );
};

Movie.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({ id: PropTypes.string }),
    path: PropTypes.string,
    url: PropTypes.string,
  }),
};

export default Movie;
