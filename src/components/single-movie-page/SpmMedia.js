import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import '../../SCSS/spmMedia.scss'
import ModalVideo from 'react-modal-video'
import youtubebtn from '../../assets/youtube-play-btn.png'

import { getSpMediaMovies } from '../../store/actions/movieAction'

function SpmMedia({ title, movieId, backdrop_path }) {
  const [isOpen, setIsOpen] = useState(false)
  const { spMediamovie } = useSelector(state => state.movieReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSpMediaMovies(movieId))
  }, [dispatch, movieId])

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
                isOpen={isOpen[item.id]}
                videoId={item.key}
                onClose={() => setIsOpen({ [item.id]: false })}
              />
              <button type="button" onClick={() => setIsOpen({ [item.id]: true })}>
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

export default SpmMedia
