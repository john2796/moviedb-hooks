import React from 'react'
import { Route } from 'react-router-dom'

import Home from './components/Home'
import SingleMovie from './components/SingleMovie'

export default function App() {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/movie/:label/:id" component={SingleMovie} />
    </>
  )
}
