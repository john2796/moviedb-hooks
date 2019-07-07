import React from 'react';
import { Route } from 'react-router-dom';

import Home from './components/Home';
import SingleMovie from './components/SingleMovie';

export default function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/movie/:label/:id" component={SingleMovie} />
    </>
  );
}
