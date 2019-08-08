/* eslint-disable camelcase */
import React from 'react'
import '../SCSS/header.scss'
import Slider from 'react-slick'
import { useSelector } from 'react-redux'

import Navbar from './Navbar'
import SocialsIcon from './social-icons/SocialsIcon'

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
          {popularTV.map(({
            backdrop_path, first_air_date, id, name, vote_average,
          }) => {
            return (
              <div className="slider-item" key={id}>
                <div className="slider-content">
                  <h2 className="slider-title">
                    {name}
                    <span>{first_air_date.substring(0, 4)}</span>
                  </h2>
                  {/* SOIAL ICONS */}
                  <SocialsIcon />
                  <ul className="slider-content-ul">
                    <li>
                      <i className="fa fa-star yellowStar" aria-hidden="true" />
                      {`${vote_average}/10`}
                    </li>
                    <li>Run Time:</li>
                    <li>Rated:</li>
                    <li>
                      <span>Release:</span>
                      {first_air_date}
                    </li>
                  </ul>
                </div>
                <img src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} alt="backdrop" />
              </div>
            )
          })}
        </Slider>
      </header>
    </div>
  )
}

export default Header
