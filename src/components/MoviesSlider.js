import React from 'react';
import { Link } from 'react-router-dom';

import Slider from 'react-slick';
import PropTypes from 'prop-types';

function MoviesSlider({ state, label }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {state.map(item => (
        <Link to={`/movie/${label}/${item.id}`} key={item.id}>
          <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" />
        </Link>
      ))}
    </Slider>
  );
}

MoviesSlider.propTypes = {
  state: PropTypes.instanceOf(Array).isRequired,
};
export default MoviesSlider;
