/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import Slider from 'react-slick';

import { useSelector, useDispatch } from 'react-redux';
import { HeaderStyle } from './HeaderStyle';
import { getNowPlaying } from '../../store/actions/movieAction';

export default function Header() {
  const { nowPlaying, isLoading } = useSelector(state => state.movieReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNowPlaying());
  }, [dispatch]);

  const settings = {
    infinite: true,
    speed: 350,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    pauseOnHover: false,
    adaptiveHeight: true,
    autoplaySpeed: 10000,
  };
  if (isLoading) {
    return <div>LOADING ...</div>;
  }
  return (
    <HeaderStyle>
      <div className="slider-container">
        <Slider {...settings}>
          {nowPlaying.map(({
            poster_path, title, vote_average, id,
          }) => {
            const imageUrl = `https://image.tmdb.org/t/p/w1280${poster_path}`;
            return (
              <div key={id}>
                <div
                  className="slide-image-wrap"
                  style={{
                    backgroundImage: `url(${imageUrl})`,
                  }}
                >
                  <div className="slide-content">
                    <div className="slide-content-inner">
                      <p>latest</p>
                      <h2>{title}</h2>
                      <p>
                        {vote_average}
                        Rating
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </HeaderStyle>
  );
}
