import React from 'react'

const SpLeftContent = ({ poster_path, name }) => {
  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={name} />
      <div className="movie-btn">
        <button className="redbtn" type="button">
          watch trailer
        </button>
        <button className="yellowbtn" type="button">
          buy ticket
        </button>
      </div>
    </>
  )
}

export default SpLeftContent
