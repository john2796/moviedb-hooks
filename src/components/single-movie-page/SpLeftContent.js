import React from 'react'
import PropTypes from 'prop-types'

import { useDispatch, useSelector } from 'react-redux'
import ModalVideo from 'react-modal-video'
import { toggleTrailer } from '../../store/actions/movieAction'

const SpLeftContent = ({ poster_path, name }) => {
  const { toggleTrailerState, spMediamovie } = useSelector(state => state.movieReducer)
  const dispatch = useDispatch()

  // Get First Trailer Key
  const key = spMediamovie && spMediamovie[0] && spMediamovie[0].key
  // Get First Trailer Index
  const trailerId = spMediamovie && spMediamovie[0] && spMediamovie[0].id

  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={name} />
      <div className="movie-btn">
        <ModalVideo
          channel="youtube"
          isOpen={toggleTrailerState[trailerId]}
          videoId={key}
          onClose={() => dispatch(toggleTrailer(trailerId, false))}
        />
        <button
          className="redbtn"
          type="button"
          onClick={() => dispatch(toggleTrailer(trailerId, true))}
        >
          watch trailer
        </button>

        <button className="yellowbtn" type="button">
          buy ticket
        </button>
      </div>
    </>
  )
}

SpLeftContent.propTypes = {
  poster_path: PropTypes.string,
  name: PropTypes.string,
}
export default SpLeftContent
