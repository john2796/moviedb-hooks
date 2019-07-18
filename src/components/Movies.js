import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { Link, Route, withRouter } from 'react-router-dom'
import {
  getUpcoming,
  getPopular,
  getNowPlaying,
  getTopRated,
  getPopularTv,
  getTopRatedTv,
  getAiringTodayTV,
  getOntheAir,
} from '../store/actions/movieAction'

import MoviesSlider from './MoviesSlider'

function Movies({ match }) {
  const {
    popular,
    topRated,
    nowPlaying,
    upcoming,
    popularTV,
    topRatedTV,
    airingToday,
    onAirTV,
  } = useSelector(state => state.movieReducer)
  return (
    <>
      <section className="movie-wrap container">
        <div className="title-view-wrap">
          <h2>in theater</h2>
          <span>view all</span>
        </div>
        <nav>
          <Link to={`${match.url}`}>#popular</Link>
          <Link to={`${match.url}upcoming`}>#coming soon</Link>
          <Link to={`${match.url}topRated`}>#top rated</Link>
          <Link to={`${match.url}nowPlaying`}>#most-reviewed</Link>
        </nav>

        <Route
          exact
          path={`${match.path}`}
          render={props => <MoviesSlider action={getPopular} {...props} state={popular} />}
        />
        <Route
          exact
          path={`${match.path}upcoming`}
          render={props => <MoviesSlider action={getUpcoming} {...props} state={upcoming} />}
        />
        <Route
          exact
          path={`${match.path}topRated`}
          render={props => <MoviesSlider action={getTopRated} {...props} state={topRated} />}
        />
        <Route
          exact
          path={`${match.path}nowPlaying`}
          render={props => <MoviesSlider action={getNowPlaying} {...props} state={nowPlaying} />}
        />
      </section>

      <section className="onTV-wrap container">
        <div className="title-view-wrap">
          <h2>on tv</h2>
          <span>view all</span>
        </div>
        <nav>
          <Link to={`${match.url}`}>#popular</Link>
          <Link to={`${match.url}airingToday`}>#airing</Link>
          <Link to={`${match.url}topRatedTV`}>#top rated</Link>
          <Link to={`${match.url}onAirTV`}>#on the air</Link>
        </nav>
        <Route
          exact
          path={`${match.path}`}
          render={props => <MoviesSlider action={getPopularTv} {...props} state={popularTV} />}
        />
        <Route
          exact
          path={`${match.path}airingToday`}
          render={props => (
            <MoviesSlider action={getAiringTodayTV} {...props} state={airingToday} />
          )}
        />
        <Route
          exact
          path={`${match.path}topRatedTV`}
          render={props => <MoviesSlider action={getTopRatedTv} {...props} state={topRatedTV} />}
        />
        <Route
          exact
          path={`${match.path}onAirTV`}
          render={props => <MoviesSlider action={getOntheAir} {...props} state={onAirTV} />}
        />
      </section>
    </>
  )
}

export default memo(withRouter(Movies))
