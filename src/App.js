import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import SingleMovie from './components/single-movie-page/SingleMovie'
import Login from './components/auth/Login'

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/movie/:id" component={SingleMovie} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  )
}
