import React from 'react';
import { Link, Route } from 'react-router-dom';
import { MainStyle } from './MainStyle';
import Movies from './Movies';
import Shows from './Shows';

export default function Main() {
  return (
    <MainStyle>
      <div className="container">
        <div className="movie-and-shows-wrap">
          <Link to="/movies">Movies</Link>
          <Link to="/shows">Shows</Link>
        </div>

        <Route path="/movies" component={Movies} />
        <Route path="/shows" component={Shows} />
        <Route exact path="/" component={Movies} />
      </div>
    </MainStyle>
  );
}
