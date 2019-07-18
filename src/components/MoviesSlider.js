import React, { useEffect, memo } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Slider from 'react-slick'

function MoviesSlider({ state, match, action }) {
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
  console.log(match)
  return (
    <Slider {...settings}>
      {state.map(item => (
        <Link to={`${match.url}movie/${item.id}`} key={item.id}>
          <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="poster_path" />
        </Link>
      ))}
    </Slider>
  )
}

MoviesSlider.propTypes = {
  state: PropTypes.instanceOf(Array).isRequired,
}
export default memo(MoviesSlider)
