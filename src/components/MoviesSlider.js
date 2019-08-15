import React, { useEffect, memo } from 'react'
import PropTypes from 'prop-types'

import { Link, withRouter } from 'react-router-dom'
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  // if (is_nowPlaying_loading) {
  //   return <DelayedSpinner delay={750} />
  // } if (is_upcoming_loading) {
  //   return <DelayedSpinner delay={750} />
  // } if (is_popular_loading) {
  //   return <DelayedSpinner delay={750} />
  // } if (is_movie_loading) {
  //   return <DelayedSpinner delay={750} />
  // } if (is_trailerQuery_loading) {
  //   return <DelayedSpinner delay={750} />
  // } if (is_popularTV_loading) {
  //   return <DelayedSpinner delay={750} />
  // } if (is_topRatedTV_loading) {
  //   return <DelayedSpinner delay={750} />
  // } if (is_airingToday_loading) {
  //   return <DelayedSpinner delay={750} />
  // } if (is_onAirTV_loading) {
  //   return <DelayedSpinner delay={750} />
  // } if (is_trendingPeople_loading) {
  //   return <DelayedSpinner delay={750} />
  // }

  return (
    <Slider {...settings}>
      {state.map((item) => {
        return (
          <div key={item.id} id="slider-image-wrap">
            <Link to={`${name}/${item.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt="poster_path"
                style={{ minHeight: '300px' }}
              />
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
  name: PropTypes.string,
}
export default memo(withRouter(MoviesSlider))
