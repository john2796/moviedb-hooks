import React, { memo, useEffect } from 'react';
import Slider from 'react-slick';

import { useSelector, useDispatch } from 'react-redux';
import { HomeStyle } from '../styles/HomeStyle';
import { getPopularTVandMovies } from '../store/actions/movieAction';

import Movies from './Movies';
import Tabs from './Tabs';

function Home() {
  const {
    popular,
    topRated,
    nowPlaying,
    upcoming,
    popularTV,
    topRatedTV,
    airingToday,
    onAirTV,
  } = useSelector(state => state.movieReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularTVandMovies());
  }, [dispatch]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <HomeStyle>
      <div className="bg-overlay">
        <header className="container">
          <nav className="header-nav">
            <span>
              <a href="/">logo</a>
              <a href="/">home</a>
              <a href="/movies">movies</a>
              <a href="/celeb">celebrities</a>
              <a href="/news">news</a>
            </span>
            <span>
              <a href="/login">login</a>
              <a href="/signUp">sign up</a>
            </span>
          </nav>
          <Slider {...settings}>
            <div className="slider-wrap">
              <div className="slider-item">
                <h2>Guradian of the galaxy</h2>
                <p>BIG IMAGE GOES HEREE</p>
              </div>
            </div>
            <div className="slider-wrap">
              <div className="slider-item">
                <h2>Guradian of the galaxy</h2>
                <p>BIG IMAGE GOES HEREE</p>
              </div>
            </div>
          </Slider>
        </header>
      </div>

      <main className="container">
        <section className="movie-wrap">
          <div className="title-view-wrap">
            <h3>In theater</h3>
            <span>view all</span>
          </div>
          <Tabs>
            <div label="#popular" state="popular">
              <Movies state={popular} />
            </div>
            <div label="#coming soon" state="upcoming">
              <Movies state={upcoming} />
            </div>
            <div label="#top rated" state="topRated">
              <Movies state={topRated} />
            </div>
            <div label="#most-reviewed" state="nowPlaying">
              <Movies state={nowPlaying} />
            </div>
          </Tabs>
        </section>

        <section className="onTV-wrap">
          <div className="title-view-wrap">
            <h3>In theater</h3>
            <span>view all</span>
          </div>
          <Tabs>
            <div label="#popular" state="popularTV">
              <Movies state={popularTV} />
            </div>
            <div label="#airing today" state="airingToday">
              <Movies state={airingToday} />
            </div>
            <div label="#top rated" state="topRatedTV">
              <Movies state={topRatedTV} />
            </div>
            <div label="#on the air" state="onAirTV">
              <Movies state={onAirTV} />
            </div>
          </Tabs>
        </section>
      </main>

      <footer>
        <p>footer</p>
      </footer>
    </HomeStyle>
  );
}
export default memo(Home);
