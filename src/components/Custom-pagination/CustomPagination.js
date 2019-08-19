import React from 'react'

const CustomPagination = ({
  goToNext, goToPrev, data, count,
}) => {
  return (
    <div className="related-movies-filter-wrap brT brB">
      <p className="brR">Movies per page:</p>
      <div className="brR">
        <select>
          <option value="5">5 Movies</option>
          <option value="10">10 Movies</option>
        </select>
      </div>
      <div className="rmf-pagination">
        <p>{`Page ${count} of ${data.total_pages}:`}</p>
        <button type="button" onClick={goToPrev}>
          prev
        </button>
        <button type="button" onClick={goToNext}>
          next
        </button>
      </div>
    </div>
  )
}

export default CustomPagination
