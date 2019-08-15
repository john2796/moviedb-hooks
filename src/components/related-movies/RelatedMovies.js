import React from 'react'
import PropTypes from 'prop-types'
import './relatedMovie.scss'

const RelatedMovies = ({ item }) => {
  return (
    <div className="related-movies-parent">
      <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
      <div>
        <h3>{item.name || item.original_title}</h3>
        <br />
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
    name: PropTypes.string,
  }),
}

export default RelatedMovies
