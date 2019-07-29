import React from 'react'
import PropTypes from 'prop-types'
import './relatedMovie.scss'

const RelatedMovies = ({ item }) => {
  return (
    <div className="related-movies-parent">
      <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
      <div>
        <h3>
          {item.original_title}
          <span>{`(${item.release_date})`}</span>
        </h3>
        <p>{`${item.vote_average} / 10`}</p>
        <p>{item.overview}</p>
        <div className="brL" />
      </div>
    </div>
  )
}

RelatedMovies.propTypes = {
  item: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    release_date: PropTypes.string,
    overview: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
  }),
}

export default RelatedMovies
