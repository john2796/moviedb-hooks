import React from 'react'
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
        {/* <SearchMovie /> */}
      </div>
    </div>
  )
}

export default SpNav
