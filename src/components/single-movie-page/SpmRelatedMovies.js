import React from 'react'
import '../../SCSS/spmRelatedMovie.scss'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'
import { getSpRelatedMovies } from '../../store/actions/movieAction'
import Pagination from '../Pagination'

function SpmRelatedMovies({ relatedMovies, title, id }) {
  // const { spRelatedMovie } = useSelector(state => state.movieReducer)
  const dispatch = useDispatch()
  const onPageChanged = (e, data) => {
    e.preventDefault()
    // Dispatch action here later
    const { currentPage } = data
    dispatch(getSpRelatedMovies(id, currentPage))
  }
  console.log(relatedMovies)
  return (
    <>
      <div className="tab-header">
        <h3>Related Movies To</h3>
        <h2 className="blue-text">{title}</h2>
      </div>

      <div className="brT brB review-total">
        <p>
          Found
          <span className="blue-text">{relatedMovies.results.length}</span>
          reviews in total
        </p>
      </div>

      {/* MAIN CONTENT for Single Page Movies */}
      <h2>Main Content Here</h2>

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
          <Pagination
            totalRecords={relatedMovies.total_results}
            pageLimit={18}
            pageNeighbours={1}
            onPageChanged={onPageChanged}
          />
        </div>
      </div>
    </>
  )
}

SpmRelatedMovies.propTypes = {
  title: PropTypes.string,
  relatedMovies: PropTypes.shape({
    page: PropTypes.number,
    total_pages: PropTypes.number,
    total_results: PropTypes.number,
  }),
}
export default SpmRelatedMovies
