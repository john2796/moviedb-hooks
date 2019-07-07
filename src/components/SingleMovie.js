import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getPopular, getUpcoming, getNowPlaying, getTopRated,
} from '../store/actions/movieAction';

import '../SCSS/singlePageMovie.scss';
import Navbar from './Navbar';
import Footer from './Footer';
import Tabs from './Tabs';
import SpmOverview from './SpmOverview';

function SingleMovie({ match }) {
  const {
    popular,
    topRated,
    nowPlaying,
    upcoming,
    popularTV,
    topRatedTV,
    airingToday,
    onAirTV,
  } = useSelector(state => state.movieReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const actions = {
      popular: getPopular,
      upcoming: getUpcoming,
      nowPlaying: getNowPlaying,
      topRated: getTopRated,
    };
    const { label } = match.params;
    dispatch(actions[label]());
  }, [dispatch, match.params]);

  const state = {
    popular,
    topRated,
    nowPlaying,
    upcoming,
    popularTV,
    topRatedTV,
    airingToday,
    onAirTV,
  };
  const m = state[match.params.label].find(item => item.id === Number(match.params.id));
  return (
    <div className="single-page-movie">
      <div className="spm-bg">
        <Navbar />
        <p>search movie</p>
      </div>
      <div className="spm-wrap">
        {/* ------------------ left section ------------------ */}
        <div className="spm-left">
          <img src={`https://image.tmdb.org/t/p/w500${m && m.poster_path}`} alt={m && m.name} />
          <button type="button">watch trailer</button>
          <button type="button">buy ticket</button>
        </div>
        {/* ------------------ right section ------------------ */}
        <div className="spm-right">
          <h2>
            {m && m.title}
            <span>{m && m.release_date}</span>
          </h2>
          <p>add to favorite</p>
          <p>share</p>
          {/* ------------------ Rate section ------------------ */}
          <div className="spm-rate">
            <p>
              <span>star icon</span>
              {`${m && m.vote_average}/10`}
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
              <SpmOverview movie={m} />
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
