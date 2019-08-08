import React from 'react'
import '../SCSS/header.scss'
import Slider from 'react-slick'
import { useSelector } from 'react-redux'

import Navbar from './Navbar'

function Header() {
  const { popularTV } = useSelector(state => state.movieReducer)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  console.log('popularTV', popularTV)

  return (
    <div className="bg-overlay">
      <Navbar />
      <header className="container">
        <Slider {...settings} className="header-slider">
          {popularTV.map((item) => {
            return (
              <div className="slider-item" key={item.id}>
                <div className="slider-content">
                  <h2>{item.name}</h2>
                  {/* ------------------ 2 buttons underneath big image red & yellow  ------------------ */}
                  <div className="social-btn-parent">
                    <p className="social-btn">
                      <span>
                        <i className="fa fa-heart" aria-hidden="true" />
                      </span>
                      add to favorite
                    </p>
                    <p className="social-btn">
                      <span>
                        <i className="fa fa-share-alt" aria-hidden="true" />
                      </span>
                      share
                    </p>
                  </div>
                  <p>BIG IMAGE GOES HEREE</p>
                </div>

                <img src={`https://image.tmdb.org/t/p/w1280${item.backdrop_path}`} />
              </div>
            )
          })}
        </Slider>
      </header>
    </div>
  )
}

export default Header
