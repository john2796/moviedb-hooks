import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import SingleMovie from './components/single-movie-page/SingleMovie'
import MovieSearchList from './components/Search-Full-List/MovieSearchList'
import FavoritesSearchList from './components/Search-Full-List/FavoritesSearchList'

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/:type/:id" component={SingleMovie} />
        <Route
          path="/movies"
          render={props => <MovieSearchList name="popular movies" type="movie" {...props} />}
        />
        <Route
          path="/show"
          render={props => <MovieSearchList name="popular tv shows" type="tv" {...props} />}
        />
        <Route path="/favorites" component={FavoritesSearchList} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  )
}
