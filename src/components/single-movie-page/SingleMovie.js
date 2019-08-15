/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
import React, { useEffect, memo } from 'react'
import PropTypes from 'prop-types'
import '../../SCSS/singlePageMovie.scss'

import { useSelector, useDispatch } from 'react-redux'
import { getMovieById } from '../../store/actions/movieAction'

import Footer from '../Footer'
import SocialsIcon from '../social-icons/SocialsIcon'
import SpTab from '../single-page-tab/SpTab'
import SpNav from './SpNav'
import SpMovieRate from './SpMovieRate'
import SpLeftContent from './SpLeftContent'
import DelayedSpinner from '../Spinner/DelayedSpinner'

function SingleMovie({ match }) {
  const { spMovie, is_spMovie_loading } = useSelector(state => state.movieReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMovieById(Number(match.params.id), match.params.type))
    window.scrollTo(0, 0)
  }, [match.params.id, match.params.type])

  const {
    poster_path, name, title, release_date, vote_average, backdrop_path,
  } = spMovie

  if (is_spMovie_loading) {
    return <DelayedSpinner delay={750} />
  }
  return (
    <div className="single-page-movie">
      {/* ------- Top of the page navbar & search ------- */}
      <SpNav backdrop_path={backdrop_path} />
      {/* ------- Wrapper for the whole main section  ------- */}
      <div className="spm-wrap container">
        {/* ------------------ Left side big image ,trailer & buy tickets buttons ------------------ */}
        <div className="spm-left">
          <SpLeftContent poster_path={poster_path} name={name} />
        </div>

        {/* ------------------ Right side, Main Contents of the page ------------------ */}
        <div className="spm-right">
          {/* ------------------ title ------------------ */}
          <div className="spm-title">
            <h1 className="bd-hd">
              {title}
              {is_spMovie_loading && <span style={{ minHeight: '300px' }}>Loading...</span>}
              <span>{release_date}</span>
            </h1>
            {/* SOCIAL ICONS */}
            <SocialsIcon />
          </div>
          {/* ------------------ Rate movie ------------------ */}
          <SpMovieRate vote_average={vote_average} />
          {/* ------------------Tabs  ------------------ */}
          <SpTab id={match.params.id} title={title} backdrop_path={backdrop_path} match={match} />
          {/* end of right */}
        </div>
        {/* end of single page wrap */}
      </div>
      {/* ------------------ Footer  ------------------ */}
      <Footer />
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
