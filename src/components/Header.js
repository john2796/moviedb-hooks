import React, { useEffect, memo, useState } from 'react';
import ReactPlayer from 'react-player';

import { useDispatch, useSelector } from 'react-redux';
import { HeaderStyle } from './styles/HeaderStyle';

import { getSingleQuery } from '../store/actions/movieAction';

const Header = () => {
  const { trailerQuery } = useSelector(state => state.movieReducer);
  const [hover, setHover] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleQuery());
  }, [dispatch]);

  const handleScroll = () => {
    // console.log(window.scrollY);
    if (window.scrollY < 500) {
      setHover(true);
    } else {
      setHover(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  console.log(hover);

  const trailer = trailerQuery.length && trailerQuery[2];
  return (
    <HeaderStyle>
      <div className="player-wrap">
        <ReactPlayer
          url={`https://www.youtube.com/embed/${trailer.key}`}
          className="react-player"
          width="100%"
          height="100%"
          playing={hover}
        />
      </div>
    </HeaderStyle>
  );
};

export default memo(Header);
