import React from 'react';
import '../SCSS/header.scss';
import Slider from 'react-slick';

import Navbar from './Navbar';

function Header() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-overlay">
      <Navbar />
      <header className="container">
        <Slider {...settings}>
          <div className="slider-wrap">
            <div className="slider-item">
              <h2>Guradian of the galaxy</h2>
              <p>BIG IMAGE GOES HEREE</p>
            </div>
          </div>
          <div className="slider-wrap">
            <div className="slider-item">
              <h2>Guradian of the galaxy</h2>
              <p>BIG IMAGE GOES HEREE</p>
            </div>
          </div>
        </Slider>
      </header>
    </div>
  );
}

export default Header;
