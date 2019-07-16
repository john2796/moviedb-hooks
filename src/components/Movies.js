import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import { Link, Route, withRouter } from 'react-router-dom'
import MoviesSlider from './MoviesSlider'

function Movies({ match }) {
  const {
    popular,
    topRated,
    nowPlaying,
    upcoming,
    // popularTV,
    // topRatedTV,
    // airingToday,
    // onAirTV,
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
          <Link to={`${match.url}movie/upcoming`}>#coming soon</Link>
          <Link to={`${match.url}movie/topRated`}>#top rated</Link>
          <Link to={`${match.url}movie/nowPlaying`}>#most-reviewed</Link>
        </nav>
        <Route
          exact
          path={`${match.path}`}
          render={props => <MoviesSlider {...props} state={popular} />}
        />
        <Route
          exact
          path={`${match.path}movie/upcoming`}
          render={props => <MoviesSlider {...props} state={upcoming} />}
        />
        <Route
          exact
          path={`${match.path}movie/topRated`}
          render={props => <MoviesSlider {...props} state={topRated} />}
        />
        <Route
          exact
          path={`${match.path}movie/nowPlaying`}
          render={props => <MoviesSlider {...props} state={nowPlaying} />}
        />
      </section>

      <section className="onTV-wrap container">
        <div className="title-view-wrap">
          <h2>on tv</h2>
          <span>view all</span>
        </div>
        {/* <Tabs>
          <div label="#popular" state="popularTV">
            <MoviesSlider state={popularTV} label="popularTV" />
          </div>
          <div label="#airing today" state="airingToday">
            <MoviesSlider state={airingToday} label="airingToday" />
          </div>
          <div label="#top rated" state="topRatedTV">
            <MoviesSlider state={topRatedTV} label="topRatedTV" />
          </div>
          <div label="#on the air" state="onAirTV">
            <MoviesSlider state={onAirTV} label="onAirTV" />
          </div>
        </Tabs> */}
      </section>
    </>
  )
}

export default memo(withRouter(Movies))
