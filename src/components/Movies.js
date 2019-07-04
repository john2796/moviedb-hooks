import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

function Movies({ state }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      {state.map(item => (
        <div key={item.id}>
          <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" />
        </div>
      ))}
    </Slider>
  );
}

Movies.propTypes = {
  state: PropTypes.instanceOf(Array).isRequired,
};
export default Movies;
