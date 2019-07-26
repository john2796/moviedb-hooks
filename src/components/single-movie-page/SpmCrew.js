import React, { useEffect } from 'react'
import '../../SCSS/spmCastCrew.scss'

import { useSelector, useDispatch } from 'react-redux'
import { getSpCast } from '../../store/actions/movieAction'

function SpmCrew({ title, movieId }) {
  const { spCast, spCrew } = useSelector(state => state.movieReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSpCast(Number(movieId)))
  }, [dispatch, movieId])

  const filterDirectorsAndWriters = spCrew
    .filter(item => item.department === 'Directing' || item.department === 'Writing')
    .filter(o => o.profile_path !== null)

  const producer = spCrew
    .filter(item => item.job === 'Producer')
    .filter(o => o.profile_path !== null)

  return (
    <div className="cast-crew-wrapper">
      <div className="tab-header">
        <h3>Cast & Crew of</h3>
        <h2 className="blue-text">{title}</h2>
      </div>

      {/* ----- DIRECTORS & CREDIT WRITERS ----- */}
      <div className="sp-cast-wrap">
        {/* ------- title with view all option ------- */}
        <div className="title-all-video">
          <h4>directors & credit writers</h4>
        </div>

        {filterDirectorsAndWriters.map(item => (
          <div className="cast-content" key={item.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} alt={item.name} />
            <p className="movie-title">{item.name}</p>
            <p className="char-name">{item.job}</p>
          </div>
        ))}
      </div>

      {/* ----- DIRECTORS & CREDIT WRITERS ----- */}
      <div className="sp-cast-wrap">
        {/* ------- title with view all option ------- */}
        <div className="title-all-video">
          <h4>cast</h4>
        </div>

        {spCast
          .filter(o => o.profile_path !== null)
          .map(item => (
            <div className="cast-content" key={item.id}>
              <img src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} alt={item.name} />
              <p className="movie-title">{item.name}</p>
              <p className="char-name">{item.character}</p>
            </div>
          ))}
      </div>

      {/* ----- DIRECTORS & CREDIT WRITERS ----- */}
      {producer.length ? (
        <div className="sp-cast-wrap">
          {/* ------- title with view all option ------- */}
          <div className="title-all-video">
            <h4>produced by</h4>
          </div>

          {producer.map(item => (
            <div className="cast-content" key={item.id}>
              <img src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} alt={item.name} />
              <p className="movie-title">{item.name}</p>
              <p className="char-name">{item.job}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default SpmCrew
