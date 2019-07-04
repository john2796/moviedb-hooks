import React from 'react';
import Slider from 'react-slick';

export default function Movies({ state }) {
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
