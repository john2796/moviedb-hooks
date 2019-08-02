/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
import React, { useEffect, memo } from 'react'
import PropTypes from 'prop-types'
import '../../SCSS/singlePageMovie.scss'

import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Route } from 'react-router-dom'
import { getMovieById } from '../../store/actions/movieAction'

import SpmOverview from './SpmOverview'
import SpmReviews from './SpmReviews'
import SpmCrew from './SpmCrew'
import SpmMedia from './SpmMedia'
import SpmRelatedMovies from './SpmRelatedMovies'
import Footer from '../Footer'
import Navbar from '../Navbar'
import SearchMovie from '../SearchMovie'

function SingleMovie({ match }) {
  const { spMovie } = useSelector(state => state.movieReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMovieById(Number(match.params.id)))
    window.scrollTo(0, 0) // hacky
  }, [])

  const {
    poster_path, name, title, release_date, vote_average, backdrop_path,
  } = spMovie

  return (
    <div className="single-page-movie">
      {/* ------- Top of the page navbar & search ------- */}
      <div
        className="hero spm-bg"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${backdrop_path})`,
        }}
      >
        <div className="hero-content container">
          <Navbar />
          <SearchMovie />
        </div>
      </div>

      {/* ------- Wrapper for the whole main section  ------- */}
      <div className="spm-wrap container">
        {/* ------------------ Left side big image ,trailer & buy tickets buttons ------------------ */}
        <div className="spm-left">
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={name} />
          <div className="movie-btn">
            <button className="redbtn" type="button">
              watch trailer
            </button>
            <button className="yellowbtn" type="button">
              buy ticket
            </button>
          </div>
        </div>

        {/* ------------------ Right side, Main Contents of the page ------------------ */}
        <div className="spm-right">
          {/* ------------------ title ------------------ */}
          <div className="spm-title">
            <h1 className="bd-hd">
              {title}
              <span>{release_date}</span>
            </h1>
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
          </div>
          {/* ------------------ Rate movie ------------------ */}
          <div className="movie-rate">
            <div className="rate">
              <i className="fa fa-star yellowStar" aria-hidden="true" />
              <p>
                <span>{`${vote_average}`}</span>
                /10
                <br />
                <span className="rv">56 reviews</span>
              </p>
            </div>
            <div className="rate-star">
              <p>Rate This Movie:</p>
              <i className="fa fa-star yellowStar" aria-hidden="true" />
              <i className="fa fa-star yellowStar" aria-hidden="true" />
              <i className="fa fa-star yellowStar" aria-hidden="true" />
              <i className="fa fa-star yellowStar" aria-hidden="true" />
              <i className="fa fa-star-o outline" aria-hidden="true" />
            </div>
          </div>

          {/* ------------------Tabs  ------------------ */}
          <nav className="single-page-movie-navTab">
            <NavLink exact activeClassName="selected" to={`${match.url}`}>
              overview
            </NavLink>
            <NavLink activeClassName="selected" to={`${match.url}/reviews`}>
              reviews
            </NavLink>
            <NavLink activeClassName="selected" to={`${match.url}/cast&crew`}>
              cast & crew
            </NavLink>
            <NavLink activeClassName="selected" to={`${match.url}/media`}>
              media
            </NavLink>
            <NavLink activeClassName="selected" to={`${match.url}/relatedmovies`}>
              related movies
            </NavLink>
          </nav>

          <Route
            exact
            path={`${match.path}`}
            render={() => <SpmOverview movieId={match.params.id} />}
          />
          <Route
            path={`${match.path}/reviews`}
            render={() => <SpmReviews movieId={match.params.id} title={title} />}
          />
          <Route
            path={`${match.path}/cast&crew`}
            render={() => <SpmCrew movieId={match.params.id} title={title} />}
          />
          <Route
            path={`${match.path}/media`}
            render={() => (
              <SpmMedia title={title} movieId={match.params.id} backdrop_path={backdrop_path} />
            )}
          />
          <Route
            path={`${match.path}/relatedmovies`}
            render={() => <SpmRelatedMovies title={title} id={Number(match.params.id)} />}
          />
        </div>
        {/* end of spm right section */}
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
    }),
    path: PropTypes.string,
    url: PropTypes.string,
  }),
}
export default memo(SingleMovie)
