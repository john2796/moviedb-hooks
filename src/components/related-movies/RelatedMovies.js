/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import PropTypes from 'prop-types'
import './relatedMovie.scss'

import { withRouter } from 'react-router-dom'

const RelatedMovies = ({ item, history, match }) => {
  const goToRelatedPage = (relatedId) => {
    const { type } = match.params
    history.push(`/${type}/${relatedId}`)
  }
  return (
    <div className="related-movies-parent" onClick={() => goToRelatedPage(item.id)}>
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
    id: PropTypes.number,
  }),
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      type: PropTypes.string,
    }),
  }),
}

export default withRouter(RelatedMovies)
