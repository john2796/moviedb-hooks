import React, { memo } from 'react';
import { Link, Route } from 'react-router-dom';
import { MainStyle } from './MainStyle';
import Movies from './Movies';
import Shows from './Shows';

const Main = () => (
  <MainStyle>
    <div className="container">
      <div className="movie-and-shows-wrap">
        <Link to="/">Movies</Link>
        <Link to="/shows">Shows</Link>
      </div>

      <Route exact path="/" component={Movies} />
      <Route exact path="/shows" component={Shows} />
    </div>
  </MainStyle>
);

export default memo(Main);
