import React, { memo, useEffect } from 'react';
import Slider from 'react-slick';

import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';
import { HomeStyle } from '../styles/HomeStyle';
import {
  getPopular, getUpcoming, getTopRated, getNowPlaying,
} from '../store/actions/movieAction';

import Movies from './Movies';
import Tabs from './Tabs';

function Home() {
  const {
    popular, topRated, nowPlaying, upcoming,
  } = useSelector(state => state.movieReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopular());
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
        <div className="title-view-wrap">
          <h3>In theater</h3>
          <span>view all</span>
        </div>
        <nav className="main-nav">
          <NavLink activeClassName="selectedLink" exact to="/">
            #popular
          </NavLink>
          <NavLink activeClassName="selectedLink" to="/movie/coming-soon">
            #coming soon
          </NavLink>
          <NavLink activeClassName="selectedLink" to="/movie/top-rated">
            #top-rated
          </NavLink>
          <NavLink activeClassName="selectedLink" to="/movie/most-reviewed">
            #most-reviewed
          </NavLink>
        </nav>

        <h1>Tabs Demo</h1>
        <Tabs>
          <div label="testing">
            See ya later,
            <em>Alligator</em>
!
          </div>
          <div label="Croc">
            After &apos;while,
            <em>Crocodile</em>
!
          </div>
          <div label="Sarcosuchus">
            Nothing to see here, this tab is
            <em>extinct</em>
!
          </div>
        </Tabs>
      </main>

      <footer>
        <p>footer</p>
      </footer>
    </HomeStyle>
  );
}
export default memo(Home);
