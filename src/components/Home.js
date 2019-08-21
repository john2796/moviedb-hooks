import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../SCSS/home.scss'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import { getPopular, getPopularTv } from '../store/actions/movieAction'
import Placeholder from './placeholder/Placeholder'

const Home = () => {
  const { popular, popularTV } = useSelector(state => state.movieReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPopular()).then(() => {
      dispatch(getPopularTv())
    })
  }, [dispatch])

  return (
    <div className="home-grid">
      <header
        style={{
          background: `url(${`https://image.tmdb.org/t/p/w1280${popular[0]
            && popular[1].backdrop_path}`}) no-repeat center top / cover`,
        }}
      >
        <nav className="desktop">
          <Link to="/">Logo</Link>
          <Link to="/">Home</Link>
          <Link to="/tv">TV Shows</Link>
          <Link to="/movie">Movies</Link>
          <Link to="/list">My List</Link>
          <input type="text" placeholder="search" className="search" />
        </nav>
        <nav className="tablet">
          <Link to="/">Logo</Link>
          <Link to="/tv">Browse</Link>
          <input type="text" placeholder="search" className="search" />
        </nav>
        <div className="banner">
          <h2>{popular[0] && popular[1].title}</h2>
          <button type="button" className="red-btn">
            Play
          </button>
          <button type="button" className="gray-btn">
            My List
          </button>
          <p className="overview">{popular[0] && popular[1].overview}</p>
        </div>
      </header>

      <main>
        <div className="slider-parent">
          <div className="slider-wrap">
            <h3 className="slider-title">Popular Movies</h3>
            <div className="slider-item">
              {popular
                && popular
                  .filter((_, idx) => idx < 8)
                  .map((item) => {
                    return (
                      <img
                        key={item.id}
                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                        alt={item.title}
                      />
                    )
                  })}
            </div>
          </div>
          <div className="slider-wrap">
            <h3 className="slider-title">Trending Now</h3>
            <div className="slider-item">
              {popular
                && popular
                  .filter((_, idx) => idx > 9 && idx < 18)
                  .map((item) => {
                    return (
                      <img
                        key={item.id}
                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                        alt={item.title}
                      />
                    )
                  })}
            </div>
          </div>
        </div>
      </main>

      {/* Two-column GRID */}
      <section className="two-col-bgOverlay">
        <div
          className="two-col-grid"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.77), rgba(0, 0, 0, 0.81)), url(${`https://image.tmdb.org/t/p/w1280${popular[0]
              && popular[4].backdrop_path}`}) no-repeat center top / cover`,
          }}
        >
          <div
            className="two-col-img"
            style={{
              background: `url(${`https://image.tmdb.org/t/p/w1280${popular[0]
                && popular[4].poster_path}`}) no-repeat center top / cover`,
            }}
          >
            <i className="fa fa-youtube-play youtube-playBtn" aria-hidden="true" />
          </div>
          <div className="two-col-content">
            <h2>{popular[0] && popular[4].title}</h2>
            <button type="button">play</button>
            <button type="button">My List</button>
            <p className="overview">{popular[0] && popular[4].overview}</p>
          </div>
        </div>
      </section>

      <section className="more-slider">
        <div className="slider-wrap">
          <h3 className="slider-title">Popular TV Shows</h3>
          <div className="slider-item">
            {popularTV
              && popularTV
                .filter((_, idx) => idx < 8)
                .map((item) => {
                  return (
                    <LazyLoad
                      key={item.id}
                      once
                      height={200}
                      placeholder={<Placeholder />}
                      debounce={500}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                        alt={item.name}
                      />
                    </LazyLoad>
                  )
                })}
          </div>
        </div>
        <div className="slider-wrap">
          <h3 className="slider-title">Trending TV Shows</h3>
          <div className="slider-item">
            {popularTV
              && popularTV
                .filter((_, idx) => idx > 9 && idx < 18)
                .map((item) => {
                  return (
                    <LazyLoad
                      key={item.id}
                      once
                      height={200}
                      placeholder={<Placeholder />}
                      debounce={500}
                    >
                      <img
                        key={item.id}
                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                        alt={item.name}
                      />
                    </LazyLoad>
                  )
                })}
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
