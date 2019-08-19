import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import ModalVideo from 'react-modal-video'
import youtubebtn from '../../assets/youtube-play-btn.png'

import { getSpMediaMovies, toggleTrailer } from '../../store/actions/movieAction'

function SpmMedia({
  title, movieId, backdrop_path, type,
}) {
  const { spMediamovie, toggleTrailerState } = useSelector(state => state.movieReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSpMediaMovies(Number(movieId), type))
  }, [dispatch, movieId, type])

  return (
    <div className="media-wrapper">
      {/* ------ tab header title ------ */}
      <div className="tab-header">
        <h3>Videos of</h3>
        <h2 className="blue-text">{title}</h2>
      </div>

      {/* ----- movie video ----- */}
      <div className="sp-videos-wrap media-tab-videos-wrap">
        {spMediamovie.map(item => (
          <div key={item.id}>
            <div
              className="sp-video-item"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${backdrop_path})`,
              }}
            >
              <ModalVideo
                channel="youtube"
                isOpen={toggleTrailerState[item.id]}
                videoId={item.key}
                onClose={() => dispatch(toggleTrailer(item.id, false))}
              />
              <button type="button" onClick={() => dispatch(toggleTrailer(item.id, true))}>
                <img src={youtubebtn} alt="play" />
              </button>
            </div>
            <div className="tab-media-item-content">
              <h6>
                {item.type}
                {item.name}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
SpmMedia.propTypes = {
  title: PropTypes.string,
  movieId: PropTypes.string,
  type: PropTypes.string,
  backdrop_path: PropTypes.string,
}

export default SpmMedia
