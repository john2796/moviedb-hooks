import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../Navbar'

const SpNav = ({ backdrop_path }) => {
  return (
    <div
      className="hero spm-bg"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${backdrop_path})`,
      }}
    >
      <div className="hero-content container">
        <Navbar />
      </div>
    </div>
  )
}
SpNav.propTypes = {
  backdrop_path: PropTypes.string,
}
export default SpNav
