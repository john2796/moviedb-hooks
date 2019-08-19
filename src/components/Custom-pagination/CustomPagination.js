import React from 'react'

const CustomPagination = ({
  goToNext, goToPrev, data, count,
}) => {
  return (
    <div className="related-movies-filter-wrap brT brB">
      <button type="button" onClick={goToPrev}>
        prev
      </button>
      <button type="button" onClick={goToNext}>
        next
      </button>
    </div>
  )
}

export default CustomPagination
