/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import '../SCSS/home.scss'

import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPopular, getPopularTv } from '../store/actions/movieAction'

import SliderItem from './Slider/SliderItem'

const Home = () => {
  const { popular, popularTV } = useSelector(state => state.movieReducer)
  const dispatch = useDispatch()
  const [movieState, setMovieState] = useState({
    backdrop_path: '/hpgda6P9GutvdkDX5MUJ92QG9aj.jpg',
    overview:
      "A spinoff of The Fate of the Furious, focusing on Johnson's US Diplomatic Security Agent Luke Hobbs forming an unlikely alliance with Statham's Deckard Shaw.",
    title: 'Fast & Furious Presents: Hobbs & Shaw',
  })

  useEffect(() => {
    // window.scroll({
    //   top: 0,
    //   left: 0,
    //   behavior: 'smooth',
    // })
    dispatch(getPopular()).then(() => {
      dispatch(getPopularTv())
    })
  }, [dispatch])

  return (
    <div className="home-grid">
      <header
        style={{
          background: ` linear-gradient(50deg, rgba(0, 0, 0, 0.66) 33%, rgba(0, 0, 0, 0) 70%), url(${`https://image.tmdb.org/t/p/w1280${movieState.backdrop_path}`}) no-repeat center top / cover`,
        }}
      >
        <nav className="desktop">
          <Link to="/">Logo</Link>
          <Link to="/">Home</Link>
          <Link to="/show">TV Shows</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/favorites">My List</Link>
          <input type="text" placeholder="search" className="search" />
        </nav>
        <nav className="tablet">
          <Link to="/">Logo</Link>
          <Link to="/tv">Browse</Link>
          <input type="text" placeholder="search" className="search" />
        </nav>
        <div className="banner">
          <h2>{movieState.title || movieState.name}</h2>
          <button type="button" className="red-btn">
            Play
          </button>
          <button type="button" className="gray-btn">
            My List
          </button>
          <p className="overview">{movieState.overview.substring(0, 250)}</p>
        </div>
      </header>

      <main>
        <SliderItem state={popular} />
      </main>

      {/* Two-column GRID */}
      <section className="two-col-bgOverlay">
        <div
          className="tc-grid"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.77), rgba(0, 0, 0, 0.81)), url(${`https://image.tmdb.org/t/p/w1280${popular[0]
              && popular[4].backdrop_path}`}) no-repeat center top / cover`,
          }}
        >
          <div
            className="tc-img"
            style={{
              background: `url(${`https://image.tmdb.org/t/p/w1280${popular[0]
                && popular[4].poster_path}`}) no-repeat center top / cover`,
            }}
          >
            <i className="fa fa-youtube-play youtube-playBtn" aria-hidden="true" />
          </div>
          <div className="tc-content">
            <h2>{popular[0] && popular[4].title}</h2>
            <button type="button" className="red-btn">
              play
            </button>
            <button type="button" className="gray-btn">
              My List
            </button>
            <p className="overview">{popular[0] && popular[4].overview}</p>
          </div>
        </div>
      </section>

      <section className="more-slider">
        <SliderItem state={popularTV} />
        <SliderItem state={popularTV} />
      </section>

      {/* SECOND Two-column GRID */}
      <section className="two-col-bgOverlay-bottom">
        <div
          className="tc-grid tcb-grid"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.77), rgba(0, 0, 0, 0.81)), url(${`https://image.tmdb.org/t/p/w1280${popular[0]
              && popular[9].backdrop_path}`}) no-repeat center top / cover`,
          }}
        >
          <div
            className="tc-img"
            style={{
              background: `url(${`https://image.tmdb.org/t/p/w1280${popular[0]
                && popular[9].poster_path}`}) no-repeat center top / cover`,
            }}
          >
            <i className="fa fa-youtube-play youtube-playBtn" aria-hidden="true" />
          </div>
          <div className="tc-content">
            <h2>{popular[0] && popular[9].title}</h2>
            <button type="button" className="red-btn">
              play
            </button>
            <button type="button" className="gray-btn">
              My List
            </button>
            <p className="overview">{popular[0] && popular[9].overview}</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="f-socials">
          <i className="fa fa-facebook-official" aria-hidden="true" />
          <i className="fa fa-instagram" aria-hidden="true" />
          <i className="fa fa-twitter" aria-hidden="true" />
          <i className="fa fa-youtube-play" aria-hidden="true" />
        </div>
        <ul className="f-content">
          <span>
            <li>Audio and Subtitles</li>
            <li>Audio Description</li>
            <li>Help Center</li>
            <li>Gift Cards </li>
          </span>
          <span>
            <li>Media Center</li>
            <li>Investor Relations</li>
            <li>Jobs </li>
          </span>
          <span>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Legal Notices</li>
          </span>
          <span>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
          </span>
        </ul>
        <p className="f-copyright">
          <i className="fa fa-copyright" aria-hidden="true" />
          John Miranda
        </p>
      </footer>
    </div>
  )
}

export default Home
