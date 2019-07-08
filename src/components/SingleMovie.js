/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getMovieById } from '../store/actions/movieAction';

import '../SCSS/singlePageMovie.scss';
import Navbar from './Navbar';
import Footer from './Footer';
import Tabs from './Tabs';
import SpmOverview from './SpmOverview';

function SingleMovie({ match }) {
  const { spMovie, isLoading } = useSelector(state => state.movieReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieById(Number(match.params.id)));
  }, [dispatch, match.params.id]);

  const {
    poster_path, name, title, release_date, vote_average,
  } = spMovie;
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="single-page-movie">
      <div className="spm-bg">
        <Navbar />
        <p>search movie</p>
      </div>
      <div className="spm-wrap">
        {/* ------------------ left section ------------------ */}
        <div className="spm-left">
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={name} />
          <button type="button">watch trailer</button>
          <button type="button">buy ticket</button>
        </div>
        {/* ------------------ right section ------------------ */}
        <div className="spm-right">
          <h2>
            {title}
            <span>{release_date}</span>
          </h2>
          <p>add to favorite</p>
          <p>share</p>
          {/* ------------------ Rate section ------------------ */}
          <div className="spm-rate">
            <p>
              <span>star icon</span>
              {`${vote_average}/10`}
              <span>56 reviews</span>
            </p>
            <p>
              Rate This Movie:
              <span>stars</span>
            </p>
          </div>
          {/* ------------------Tabs  ------------------ */}
          <Tabs>
            <div label="overview" state="">
              <SpmOverview movie={spMovie} />
            </div>
            <div label="reviews" state="">
              <p>reviews</p>
            </div>
            <div label="cast & crew" state="">
              <p>cast & crew</p>
            </div>
            <div label="media" state="">
              <p>media</p>
            </div>
            <div label="related movies" state="">
              <p>related movies</p>
            </div>
          </Tabs>
        </div>
        {/* end of spm right */}
      </div>

      <Footer />
    </div>
  );
}

SingleMovie.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
    }),
    path: PropTypes.string,
    url: PropTypes.string,
  }),
};
export default SingleMovie;
