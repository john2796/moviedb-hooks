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
    className: 'center',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,
    arrows: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
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

  return (
    <Slider {...settings}>
      {state.map((item) => {
        return (
          <div key={item.id} id="slider-image-wrap">
            <Link to={`${name}/${item.id}`}>
              <img
                id="testing"
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
