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
    poster_path, name, title, release_date, vote_average, backdrop_path,
  } = spMovie;
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="single-page-movie">
      {/* ------- Top of the page navbar & search ------- */}
      <div
        className="hero spm-bg"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${backdrop_path})`,
        }}
      >
        <Navbar />
        <p className="container">search movie</p>
      </div>

      {/* ------- Wrapper for the whole main section  ------- */}
      <div className="spm-wrap container">
        {/* ------------------ Left side big image ,trailer & buy tickets buttons ------------------ */}
        <div className="spm-left">
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={name} />
          <div className="movie-btn">
            <button className="redbtn" type="button">
              watch trailer
            </button>
            <button className="yellowbtn" type="button">
              buy ticket
            </button>
          </div>
        </div>

        {/* ------------------ Right side, Main Contents of the page ------------------ */}
        <div className="spm-right">
          {/* ------------------ title ------------------ */}
          <div className="spm-title">
            <h1 className="bd-hd">
              {title}
              <span>{release_date}</span>
            </h1>
            {/* ------------------ 2 buttons underneath big image red & yellow  ------------------ */}
            <div className="social-btn-parent">
              <p className="social-btn">
                <span>
                  <i className="fa fa-heart" aria-hidden="true" />
                </span>
                add to favorite
              </p>
              <p className="social-btn">
                <span>
                  <i className="fa fa-share-alt" aria-hidden="true" />
                </span>
                share
              </p>
            </div>
          </div>
          {/* ------------------ Rate movie ------------------ */}
          <div className="movie-rate">
            <div className="rate">
              <i className="fa fa-star yellowStar" aria-hidden="true" />
              <p>
                <span>{`${vote_average}`}</span>
                /10
                <br />
                <span className="rv">56 reviews</span>
              </p>
            </div>
            <div className="rate-star">
              <p>Rate This Movie:</p>
              <i className="fa fa-star yellowStar" aria-hidden="true" />
              <i className="fa fa-star yellowStar" aria-hidden="true" />
              <i className="fa fa-star yellowStar" aria-hidden="true" />
              <i className="fa fa-star yellowStar" aria-hidden="true" />
              <i className="fa fa-star-o outline" aria-hidden="true" />
            </div>
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
