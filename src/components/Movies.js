/* eslint-disable camelcase */
import React, { useEffect, memo } from 'react';
import Slider from 'react-slick';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllMovies } from '../store/actions/movieAction';
import { MoviesStyle } from './styles/MainStyle';

const Movies = () => {
  const {
    popular, upcoming, nowPlaying, topRated,
  } = useSelector(state => state.movieReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  const settings = {
    infinite: true,
    speed: 350,
    slidesToShow: 6,
    slidesToScroll: 6,
    adaptiveHeight: true,
    mobileFirst: true,
  };

  return (
    <MoviesStyle>
      {/* =========================== upcoming ============================= */}
      <div className="carousel-wrap">
        <h3 className="ch-1">upcoming</h3>
        <Slider {...settings}>
          {upcoming.map(({ title, poster_path, id }) => {
            const imageUrl = `https://image.tmdb.org/t/p/w1280${poster_path}`;
            return (
              <div key={id} className="carousel-item">
                <Link to={`/movie/${title}`}>
                  <img src={imageUrl} alt={title} />
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>

      {/* =========================== popular ============================= */}
      <div className="carousel-wrap">
        <h3>popular</h3>
        <Slider {...settings}>
          {popular.map(({ title, poster_path, id }) => {
            const imageUrl = `https://image.tmdb.org/t/p/w1280${poster_path}`;
            return (
              <div key={id} className="carousel-item">
                <Link to={`/movie/${title}`}>
                  <img src={imageUrl} alt={title} />
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>

      {/* =========================== nowPlaying ============================= */}
      <div className="carousel-wrap">
        <h3>nowPlaying</h3>
        <Slider {...settings}>
          {nowPlaying.map(({ title, poster_path, id }) => {
            const imageUrl = `https://image.tmdb.org/t/p/w1280${poster_path}`;
            return (
              <div key={id} className="carousel-item">
                <Link to={`/movie/${title}`}>
                  <img src={imageUrl} alt={title} />
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>

      {/* =========================== topRated ============================= */}
      <div className="carousel-wrap">
        <h3>topRated</h3>
        <Slider {...settings}>
          {topRated.map(({ title, poster_path, id }) => {
            const imageUrl = `https://image.tmdb.org/t/p/w1280${poster_path}`;
            return (
              <div key={id} className="carousel-item">
                <Link to={`/movie/${title}`}>
                  <img src={imageUrl} alt={title} />
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    </MoviesStyle>
  );
};

export default memo(Movies);
