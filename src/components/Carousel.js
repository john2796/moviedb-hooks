/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const Carousel = ({ carouselName, state }) => {
  const settings = {
    infinite: true,
    speed: 350,
    slidesToShow: 6,
    slidesToScroll: 6,
    adaptiveHeight: true,
    mobileFirst: true,
  };

  if (!state.length) {
    return <div>LOADING...</div>;
  }
  return (
    <div className="carousel-wrap">
      <h3 className="ch-1">{carouselName}</h3>
      <Slider {...settings}>
        {state.map(({ title, poster_path, id }) => {
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
  );
};

Carousel.propTypes = {
  carouselName: PropTypes.string,
  state: PropTypes.shape({
    poster_path: PropTypes.string,
  }),
};

export default Carousel;
