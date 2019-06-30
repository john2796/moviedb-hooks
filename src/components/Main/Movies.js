import React, { useEffect, memo } from 'react';
import Slider from 'react-slick';

import { useSelector, useDispatch } from 'react-redux';
import { MoviesStyle } from './MainStyle';
import { getAllMovies } from '../../store/actions/movieAction';

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
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: true,
    mobileFirst: true,
  };
  console.log(popular, upcoming, nowPlaying, topRated);

  return (
    <MoviesStyle>
      {/* =========================== upcoming ============================= */}
      <div className="carousel-wrap">
        <h3>upcoming</h3>
        <Slider {...settings}>
          {upcoming.map(({ title, poster_path, id }) => {
            const imageUrl = `https://image.tmdb.org/t/p/w1280${poster_path}`;
            return (
              <div key={id} className="carousel-item">
                <div>
                  <img src={imageUrl} alt={title} />
                  <h4>{title}</h4>
                  <p>Genre goes here</p>
                </div>
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
                <div>
                  <img src={imageUrl} alt={title} />
                  <h4>{title}</h4>
                  <p>Genre goes here</p>
                </div>
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
                <div>
                  <img src={imageUrl} alt={title} />
                  <h4>{title}</h4>
                  <p>Genre goes here</p>
                </div>
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
                <div>
                  <img src={imageUrl} alt={title} />
                  <h4>{title}</h4>
                  <p>Genre goes here</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </MoviesStyle>
  );
};
export default memo(Movies);
/*
Fetch the following :
1 upcoming
2 popular
3 nowplaying
4 top rated

then create carousel
*/
