/* eslint-disable camelcase */
import React from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import '../SCSS/header.scss'

import PropTypes from 'prop-types'
import Slider from 'react-slick'
import Navbar from './Navbar'
import SocialsIcon from './social-icons/SocialsIcon'
import Spinner from './Spinner/Spinner'

function Header({ history }) {
  const { headerPopularTv } = useSelector(state => state.movieReducer)

  const sendToSinglePage = (movieId) => {
    history.push(`/tv/${movieId}`)
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="bg-overlay">
      <Navbar />
      <header className="container">
        <Slider {...settings} className="header-slider">
          {headerPopularTv.map(
            ({
              backdrop_path, first_air_date, id, name, vote_average, overview,
            }) => {
              return (
                <div className="slider-item" key={id}>
                  <div className="slider-content">
                    <span className="blue-pills">sci-fi</span>
                    <span className="yellow-pills">action</span>
                    <span className="orange-pills">adventure</span>
                    <h2 className="mTitle">
                      {name}
                      <span className="date">{first_air_date.substring(0, 4)}</span>
                    </h2>
                    {/* SOIAL ICONS */}
                    <SocialsIcon />
                    <ul className="slider-content-ul">
                      <li>
                        <i className="fa fa-star yellowStar" aria-hidden="true" />
                        {`${vote_average}`}
                        <span className="text-gray">/10</span>
                      </li>
                      <li className="text-gray">Run Time:</li>
                      <li className="text-gray">Rated:</li>
                      <li className="text-gray">
                        <span>Release:</span>
                        {first_air_date}
                      </li>
                    </ul>
                    <p className="header-overview">{overview}</p>
                    <button type="button" className="red-btn" onClick={() => sendToSinglePage(id)}>
                      more detail
                    </button>
                  </div>
                  <div className="slider-image-right">
                    <img src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} alt="backdrop" />
                  </div>
                </div>
              )
            },
          )}
        </Slider>
      </header>
      {/* <Spinner /> */}
    </div>
  )
}

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}
export default withRouter(Header)
