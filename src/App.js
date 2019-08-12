import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import SingleMovie from './components/single-movie-page/SingleMovie'

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/:type/:id/" component={SingleMovie} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  )
}
