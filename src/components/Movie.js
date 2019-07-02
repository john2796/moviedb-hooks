/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { getSingleMovie } from '../store/actions/movieAction';
import { SingleMovie } from './styles/MainStyle';

const Movie = ({ match }) => {
  const { movie } = useSelector(state => state.movieReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('hit useEffect1 ---->');
    const { id } = match.params;
    dispatch(getSingleMovie(id));
  }, [dispatch]);

  const m = movie.length && movie[0];
  return (
    <SingleMovie>
      <h1>testing</h1>
    </SingleMovie>
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
