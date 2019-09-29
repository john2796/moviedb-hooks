/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
import React, { useEffect, memo } from 'react'
import PropTypes from 'prop-types'
import '../../SCSS/singlePageMovie.scss'

import { useSelector, useDispatch } from 'react-redux'
import { getMovieById } from '../../store/actions/movieAction'

import SocialsIcon from '../social-icons/SocialsIcon'
import SpTab from '../single-page-tab/SpTab'
import SpMovieRate from './SpMovieRate'
import SpLeftContent from './SpLeftContent'
import DelayedSpinner from '../Spinner/DelayedSpinner'

function SingleMovie({ match }) {
  const { spMovie, is_spMovie_loading } = useSelector(state => state.movieReducer)
  const dispatch = useDispatch()

  // Fetch single movie
  useEffect(() => {
    dispatch(getMovieById(Number(match.params.id), match.params.type))
    // when page first load or when id type changes move scroll to top page
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [match.params.id, match.params.type])

  // desctructure spMovie details
  const {
    poster_path, name, title, release_date, vote_average, backdrop_path,
  } = spMovie

  // loader with delay
  if (is_spMovie_loading) {
    return <DelayedSpinner delay={750} />
  }
  return (
    <div className="spm-wrap">
      <div className="spm-left">
        <SpLeftContent poster_path={poster_path} name={name} />
      </div>

      <div className="spm-right">
        <div className="spm-title">
          <h1 className="bd-hd">
            {title || name}
            {is_spMovie_loading && <span style={{ minHeight: '300px' }}>Loading...</span>}
            <span>{release_date}</span>
          </h1>
          <SocialsIcon />
        </div>
        <SpMovieRate vote_average={vote_average} />
        <SpTab
          id={match.params.id}
          title={title || name}
          backdrop_path={backdrop_path}
          match={match}
        />
      </div>
    </div>
  )
}

SingleMovie.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      type: PropTypes.string,
    }),
    path: PropTypes.string,
    url: PropTypes.string,
  }),
}
export default memo(SingleMovie)
