import React, { useEffect } from 'react'
import '../../SCSS/spmReview.scss'

import { useSelector, useDispatch } from 'react-redux'
import { getSpReviews } from '../../store/actions/movieAction'

function SpmReviews({ title, movieId }) {
  const { spReviews } = useSelector(state => state.movieReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSpReviews(movieId))
  }, [dispatch, movieId])

  return (
    <>
      <div className="tab-header">
        <h3>Reviews</h3>
        <h2 className="blue-text">{title}</h2>
      </div>

      <div className="brT brB review-total">
        <p>
          Found
          <span className="blue-text">{spReviews.length}</span>
          reviews in total
        </p>
      </div>

      {/* ---------- review content ----------- */}
      <div className="sp-reviews tab-reviews">
        {/* ------- title with view all option ------- */}
        {spReviews.map(item => (
          <div className="rev-item" key={item.id}>
            <h3>{item.author}</h3>
            <p className="spm-paragraph brB">
              {`${item.content.substring(0, 400)}...`}
              <a
                href={item.url}
                rel="noopener noreferrer"
                target="_blank"
                className="spm-paragraph readmore"
              >
                read more
              </a>
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default SpmReviews
