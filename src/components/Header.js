import React from 'react';
import Slider from 'react-slick';

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
      <header className="container">
        <nav className="header-nav">
          <span>
            <a href="/">logo</a>
            <a href="/">home</a>
            <a href="/movies">movies</a>
            <a href="/celeb">celebrities</a>
            <a href="/news">news</a>
          </span>
          <span>
            <a href="/login">login</a>
            <a href="/signUp">sign up</a>
          </span>
        </nav>
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
