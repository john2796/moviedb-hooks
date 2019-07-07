import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPopularTVandMovies } from '../store/actions/movieAction';

import '../SCSS/main.scss';
import Movies from './Movies';
import Trailer from './Trailer';
import LatestNews from './LatestNews';

function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularTVandMovies());
  }, [dispatch]);

  return (
    <main>
      <Movies />
      <Trailer />
      <LatestNews />
    </main>
  );
}

export default memo(Main);
