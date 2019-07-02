/* eslint-disable camelcase */
import React, { useEffect, memo, useState } from 'react';
import Slider from 'react-slick';
import ReactPlayer from 'react-player';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllMovies } from '../store/actions/movieAction';
import { MoviesStyle } from './styles/MainStyle';

import Carousel from './Carousel';

const Main = () => {
  const [hover, setHover] = useState(false);
  const {
    popular, upcoming, nowPlaying, topRated, trailerQuery,
  } = useSelector(
    state => state.movieReducer,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  const handleScroll = () => {
    if (window.scrollY > 1376 && window.scrollY < 2087) {
      setHover(false);
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

  const trailer = trailerQuery.length && trailerQuery[1];

  const settings = {
    infinite: true,
    speed: 350,
    slidesToShow: 6,
    slidesToScroll: 6,
    adaptiveHeight: true,
    mobileFirst: true,
  };
  const spidermanData = nowPlaying.length && nowPlaying[1];

  return (
    <MoviesStyle>
      <Carousel state={upcoming} carouselName="upcoming" />
      <Carousel state={popular} carouselName="popular" />
      <Carousel state={nowPlaying} carouselName="now playing" />

      {/* =========================== MIDDLE PAGE VIDEO ============================= */}
      <div
        className="mid-page-vid"
        style={{
          background: `linear-gradient(rgba(23, 16, 16, 0.86), rgba(0, 0, 0, 0.68)), url(https://image.tmdb.org/t/p/w1280${
            spidermanData.backdrop_path
          })`,
        }}
      >
        <div className="player-wrap">
          <ReactPlayer
            url={`https://www.youtube.com/embed/${trailer.key}`}
            className="react-player"
            width="500px"
            height="300px"
            playing={hover}
            volume={0.2}
          />
        </div>
        <div className="right-vid-content">
          <img
            src="https://occ-0-1504-1503.1.nflxso.net/dnm/api/v5/rendition/25247fca08ea5e68662f1fd0bcbb48bf95617a4a/AAAABSYBZ6zhiWNuR5n1WP5pYQa7vRjVcWDmqThKIz2Q3DCAGuavLDGluyVkq6NmQCRZqbj5hqzSJPR-jfsluzrCRHjrMJ81yccCgdDHL6xD8-KAhF-JdyLLChQDLNpuE0wSGTx5nQs715-Z13kaXLL8-uusZxn47U2-MwOPhYOMghPAqGFNy0QYIhT-eLNYCHDq3rSljFcl7xyhwKufCPsXh06SbhZBSeIK6EXxE_fLFb8K_zAIr7khxziSWnsei-6OjsE.webp"
            alt="tesitng"
          />
          <div className="right-inner-content">
            <div className="btn-wrap">
              <a href="/play">
                <span className="btn-1">Play</span>
              </a>
              <a href="/myList">
                <span className="btn-1">My List</span>
              </a>
            </div>
            <h3>{spidermanData.title}</h3>
            <p>{spidermanData.overview}</p>
          </div>
        </div>
      </div>
      {/* =========================== topRated ============================= */}
      <Carousel state={topRated} carouselName="top rated" />
    </MoviesStyle>
  );
};

export default memo(Main);
