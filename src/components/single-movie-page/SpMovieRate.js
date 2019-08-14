import React from 'react'

const SpMovieRate = ({ vote_average }) => {
  return (
    <div className="movie-rate">
      <div className="rate">
        <i className="fa fa-star yellowStar" aria-hidden="true" />
        <p>
          <span>{`${vote_average}`}</span>
          /10
          <br />
          <span className="rv">56 reviews</span>
        </p>
      </div>
      <div className="rate-star">
        <p>Rate This Movie:</p>
        <i className="fa fa-star yellowStar" aria-hidden="true" />
        <i className="fa fa-star yellowStar" aria-hidden="true" />
        <i className="fa fa-star yellowStar" aria-hidden="true" />
        <i className="fa fa-star yellowStar" aria-hidden="true" />
        <i className="fa fa-stark-o outline" aria-hidden="true" />
      </div>
    </div>
  )
}

export default SpMovieRate
