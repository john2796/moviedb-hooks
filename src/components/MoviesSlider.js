import React, { useEffect, memo } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Slider from 'react-slick'

function MoviesSlider({ state, action, name = '/movie' }) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(action())
  }, [action, dispatch])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,
    arrows: false,
  }
  return (
    <Slider {...settings}>
      {state.map((item) => {
        // NOTES: TV Tab is not working at the moment because of the endpoints in movie action files, the api is not correspond with the tv same thing with the single page for movies .... remove this once it's done
        return (
          <div key={item.id} id="slider-image-wrap">
            <Link to={`${name}/${item.id}`}>
              <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="poster_path" />
            </Link>
          </div>
        )
      })}
    </Slider>
  )
}

MoviesSlider.propTypes = {
  state: PropTypes.instanceOf(Array).isRequired,
  action: PropTypes.func,
}
export default memo(MoviesSlider)
