import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import SinglePage from './components/single-page/SinglePage'

export default function App() {
  return (
    <>
      <Switch>
        {/* <Route path="/" component={Home} /> */}
        <Route path="/" component={SinglePage} />
        <SinglePage />
      </Switch>
    </>
  )
}
