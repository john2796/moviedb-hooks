/* eslint-disable camelcase */
import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import '../SCSS/singlePageMovie.scss';

import { useSelector, useDispatch } from 'react-redux';
import { getSpOverviewData } from '../store/actions/movieAction';

import Tabs from './Tabs';
import Navbar from './Navbar';
import Footer from './Footer';
import SpmOverview from './SpmOverview';

function SingleMovie({ match }) {
  const { spMovie, isLoading } = useSelector(state => state.movieReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpOverviewData(Number(match.params.id)));
  }, [dispatch, match.params.id]);

  const {
    poster_path, name, title, release_date, vote_average,
  } = spMovie;
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="single-page-movie">
      {/* ------- Top of the page navbar & search ------- */}
      <div className="spm-bg">
        <Navbar />
        <p>search movie</p>
      </div>

      {/* ------- Wrapper for the whole main section  ------- */}
      <div className="spm-wrap container">
        {/* ------------------ Left side big image ,trailer & buy tickets buttons ------------------ */}
        <div className="spm-left">
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={name} />
          <button type="button">watch trailer</button>
          <button type="button">buy ticket</button>
        </div>

        {/* ------------------ Right side, Main Contents of the page ------------------ */}
        <div className="spm-right">
          {/* ------------------ title ------------------ */}
          <div className="spm-title">
            <h2>
              {title}
              <span>{release_date}</span>
            </h2>
            <p>add to favorite</p>
            <p>share</p>
          </div>
          {/* ------------------ Rate movie ------------------ */}
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
            <div label="overview" state="overview">
              <SpmOverview />
            </div>
            <div label="reviews" state="reviews">
              <p>reviews</p>
            </div>
            <div label="cast & crew" state="cast & crew">
              <p>cast & crew</p>
            </div>
            <div label="media" state="media">
              <p>media</p>
            </div>
            <div label="related movies" state="related movies">
              <p>related movies</p>
            </div>
          </Tabs>
        </div>
        {/* end of spm right section */}
      </div>

      {/* ------------------ Footer  ------------------ */}

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
export default memo(SingleMovie);
