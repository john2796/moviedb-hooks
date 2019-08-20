import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../SCSS/home.scss'
import { Link } from 'react-router-dom'
import { getPopular } from '../store/actions/movieAction'

const Home = () => {
  const { popular } = useSelector(state => state.movieReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPopular())
  }, [dispatch])

  return (
    <div className="home-grid">
      {/* Header */}
      <header
        style={{
          background: `url(${`https://image.tmdb.org/t/p/w1280${popular[0]
            && popular[1].backdrop_path}`}) no-repeat center top / cover`,
        }}
      >
        <nav>
          <Link to="/">Home</Link>
          <Link to="/tv">TV Shows</Link>
          <Link to="/movie">Movies</Link>
          <Link to="/recent">Recently Added</Link>
          <Link to="/list">My List</Link>
          <input type="text" placeholder="search" className="search" />
        </nav>
        <div className="banner">
          <h2>{popular[0] && popular[1].title}</h2>
          <button type="button">play</button>
          <button type="button">My List</button>
          <p className="overview">{popular[0] && popular[1].overview}</p>
        </div>
      </header>

      {/* main */}
      <main>
        <p>main content here</p>
      </main>

      {/* Footer */}
      <footer>
        {/* <div className="f-socials">
          <i className="fa fa-facebook-official" aria-hidden="true" />
          <i className="fa fa-instagram" aria-hidden="true" />
          <i className="fa fa-twitter" aria-hidden="true" />
          <i className="fa fa-youtube-play" aria-hidden="true" />
        </div>
        <ul className="f-content">
          <li>Audio and Subtitles</li>
          <li>Audio Description</li>
          <li>Help Center</li>
          <li>Gift Cards </li>
          <li>Media Center</li>
          <li>Investor Relations</li>
          <li>Jobs </li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Legal Notices</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
        </ul>
        <p className="f-copyright">
          <i className="fa fa-copyright" aria-hidden="true" />
          John Miranda
        </p> */}
      </footer>
    </div>
  )
}

export default Home
