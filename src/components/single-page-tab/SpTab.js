import React from 'react'
import { NavLink, Route } from 'react-router-dom'

import SpmOverview from '../single-movie-page/SpmOverview'
import SpmReviews from '../single-movie-page/SpmReviews'
import SpmCrew from '../single-movie-page/SpmCrew'
import SpmMedia from '../single-movie-page/SpmMedia'
import SpmRelatedMovies from '../single-movie-page/SpmRelatedMovies'

const SpTab = ({
  match, id, title, backdrop_path,
}) => {
  return (
    <>
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

      <Route exact path={`${match.path}`} render={() => <SpmOverview movieId={id} />} />
      <Route
        path={`${match.path}/reviews`}
        render={() => <SpmReviews type={match.params.type} movieId={id} title={title} />}
      />
      <Route
        path={`${match.path}/cast&crew`}
        render={() => <SpmCrew movieId={id} title={title} type={match.params.type} />}
      />
      <Route
        path={`${match.path}/media`}
        render={() => (
          <SpmMedia
            title={title}
            movieId={id}
            type={match.params.type}
            backdrop_path={backdrop_path}
          />
        )}
      />
      <Route
        path={`${match.path}/relatedmovies`}
        render={() => <SpmRelatedMovies type={match.params.type} title={title} id={Number(id)} />}
      />
    </>
  )
}

export default SpTab
