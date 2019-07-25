/* eslint-disable camelcase */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ModalVideo from 'react-modal-video'

import { getSpOverviewData } from '../../store/actions/movieAction'
import youtubebtn from '../../assets/youtube-play-btn.png'

function SpmOverview({ movieId }) {
  // Select all state from reducer
  const {
    spMovie, spReviews, spCast, spMediamovie, spKeyword, spCrew,
  } = useSelector(
    state => state.movieReducer,
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSpOverviewData(Number(movieId)))
  }, [])
  const [isOpen, setIsOpen] = useState(false)
  // desctructure spMovie
  const { author, content, url } = spReviews.length && spReviews[0]
  const filteredVideos = spMediamovie.filter((_, idx) => idx <= 3)
  const filteredCast = spCast.filter((_, idx) => idx <= 7).filter(x => x.profile_path !== null)
  const fourCast = spCast.filter((_, idx) => idx <= 4)
  const directors = spCrew.filter(item => item.department === 'Directing')
  const writers = spCrew.filter(item => item.department === 'Writing')

  const {
    overview, backdrop_path, runtime, genres, release_date,
  } = spMovie
  return (
    <div className="spm-overview">
      {/* ----- left overview ----- */}
      <div className="spm-overview-left">
        <p className="spm-paragraph">{overview}</p>

        {/* ------- title with view all option ------- */}
        <div className="title-all-video">
          <h4>videos</h4>
          <span className="sub-heading ">
            {`All ${spMediamovie.length} Videos`}
            <i className="fa fa-angle-right" aria-hidden="true" />
          </span>
        </div>

        {/* ----- movie video ----- */}
        <div className="sp-videos-wrap">
          {filteredVideos.map(item => (
            <div
              className="sp-video-item"
              key={item.id}
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
          ))}
        </div>

        {/* ----- Cast  ----- */}
        <div className="sp-cast-wrap">
          {/* ------- title with view all option ------- */}
          <div className="title-all-video">
            <h4>cast</h4>
            <span className="sub-heading ">
              Full Cast & Crew
              <i className="fa fa-angle-right" aria-hidden="true" />
            </span>
          </div>

          {filteredCast.map(item => (
            <div className="cast-content" key={item.id}>
              <img src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} alt={item.name} />
              <p className="movie-title">{item.name}</p>
              <p className="char-name">{item.character}</p>
            </div>
          ))}
        </div>

        {/* ----- Reviews ----- */}
        <div className="sp-reviews">
          {/* ------- title with view all option ------- */}
          <div className="title-all-video">
            <h4>user reviews</h4>
            <span className="sub-heading ">
              {`See All ${spReviews.length} Reviews`}
              <i className="fa fa-angle-right" aria-hidden="true" />
            </span>
          </div>

          {/* ------- Author ------- */}
          {spReviews.length ? (
            <>
              <h3>{author}</h3>
              <p className="spm-paragraph">
                {`${content && content.substring(0, 400)}...`}
                <a
                  href={url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="spm-paragraph readmore"
                >
                  read more
                </a>
              </p>
            </>
          ) : (
            <p className="no-data-message">No reviews</p>
          )}
        </div>
      </div>

      {/* ----- Right side of overview ----- */}
      <div className="spm-overview-right">
        <div className="spr-item">
          <h6>Director: </h6>
          {directors.map(item => (
            <p className="blue-text" key={item.id}>
              {item.name}
            </p>
          ))}
        </div>
        <div className="spr-item">
          <h6>Writer: </h6>
          {writers.map(item => (
            <p className="blue-text" key={item.id}>
              {item.name}
            </p>
          ))}
        </div>
        <div className="spr-item">
          <h6>Stars: </h6>
          {fourCast.map(item => (
            <p className="blue-text" key={item.id}>
              {item.name}
            </p>
          ))}
        </div>
        <div className="spr-item">
          <h6>Genres: </h6>
          {genres
            && genres.map(item => (
              <p className="blue-text" key={item.id}>
                {item.name}
              </p>
            ))}
        </div>
        <div className="spr-item">
          <h6>Release Date: </h6>
          <p>{release_date}</p>
        </div>
        <div className="spr-item">
          <h6>Run Time: </h6>
          <p>{`${runtime} min`}</p>
        </div>
        <div className="spr-item">
          <h6>Plot Keywords: </h6>
          <div className="keyword-parent">
            {spKeyword
              && spKeyword.map(item => (
                <p className="keywords" key={item.id}>
                  {item.name}
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpmOverview
