import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { AppStyle } from './AppStyle';

import Search from './components/routes/Search';
import Login from './components/routes/Login';
import Movie from './components/Movie';
import Home from './components/routes/Home';

export default function App() {
  return (
    <AppStyle>
      <Switch>
        <Route exact path="/search" component={Search} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/movie/:id" component={Movie} />
        <Route path="/" component={Home} />
      </Switch>
    </AppStyle>
  );
}
