import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPopularTVandMovies } from '../store/actions/movieAction';

import Movies from './Movies';
import Trailer from './Trailer';

function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularTVandMovies());
  }, [dispatch]);

  return (
    <main>
      <Movies />
      <Trailer />
    </main>
  );
}

export default memo(Main);
