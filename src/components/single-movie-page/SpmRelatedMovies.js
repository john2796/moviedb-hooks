import React, { useState, useEffect } from 'react'

import './spmRelatedMovies.scss'
import PropTypes from 'prop-types'

import { useDispatch, useSelector } from 'react-redux'
import { getSpRelatedMovies } from '../../store/actions/movieAction'

import RelatedMovies from '../related-movies/RelatedMovies'
import DelayedSpinner from '../Spinner/DelayedSpinner'

function SpmRelatedMovies({ title, id, type }) {
  const [count, setCount] = useState(1)
  const { spRelatedMovie, is_spRelatedMovie_loading } = useSelector(state => state.movieReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSpRelatedMovies(Number(id), type, count))

    return () => {
      window.scrollTo(0, 0)
    }
  }, [count, dispatch, id, type])

  const goToNext = () => {
    if (count >= spRelatedMovie.total_pages) return
    setCount(count + 1)
  }
  const goToPrev = () => {
    if (count <= 1) return
    setCount(count - 1)
  }

  // if the loading take less than 750 ms it won't show loading
  if (is_spRelatedMovie_loading) {
    return <DelayedSpinner delay={750} />
  }
  return (
    <>
      <div className="tab-header">
        <h3>Related Movies To</h3>
        <h2 className="blue-text">{title}</h2>
      </div>

      <div className="brT brB review-total">
        <p>
          Found
          <span className="blue-text">{`${spRelatedMovie.total_results} movies`}</span>
          in total
        </p>
      </div>

      {/* MAIN CONTENT for Single Page Movies */}

      {spRelatedMovie.results
        && spRelatedMovie.results.map((item) => {
          return <RelatedMovies key={item.id} item={item} />
        })}

      {/* <-- bottom of the page filter options && pagination --> */}
      <div className="related-movies-filter-wrap brT brB">
        <p className="brR">Movies per page:</p>
        <div className="brR">
          <select>
            <option value="5">5 Movies</option>
            <option value="10">10 Movies</option>
          </select>
        </div>
        <div className="rmf-pagination">
          <p>{`Page ${count} of ${spRelatedMovie.total_pages}:`}</p>
          <button type="button" onClick={goToPrev}>
            prev
          </button>
          <button type="button" onClick={goToNext}>
            next
          </button>
        </div>
      </div>
    </>
  )
}

SpmRelatedMovies.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  relatedMovies: PropTypes.shape({
    page: PropTypes.number,
    total_pages: PropTypes.number,
    total_results: PropTypes.number,
  }),
}
export default SpmRelatedMovies
