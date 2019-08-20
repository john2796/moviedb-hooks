import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home'

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </>
  )
}
