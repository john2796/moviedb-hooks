/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const LEFT_PAGE = 'LEFT'
const RIGHT_PAGE = 'RIGHT'

const range = (from, to, step = 1) => {
  let i = from
  const range = []

  while (i <= to) {
    range.push(i)
    i += step
  }
}

function Pagination(props) {
  const {
    totalRecords = null, pageLimit = 30, pageNeighbours = 0, onPageChanged,
  } = props
  const [currPage, setCurrentPage] = useState(1)

  // ======= Check for value of the props then store on variable ========
  const page_limit = typeof pageLimit === 'number' ? pageLimit : 30
  const total_records = typeof totalRecords === 'number' ? totalRecords : 30
  const page_neighbours = typeof pageNeighbours === 'number' ? Math.max(0, Math.min(pageNeighbours, 2)) : 0
  const totalPages = Math.ceil(total_records / page_limit)

  const goToPage = (page) => {
    const currentPage = Math.max(0, Math.min(page, totalPages))

    const paginationData = {
      currentPage,
      totalPages,
      pageLimit: page_limit,
      totalRecords: total_records,
    }
    setCurrentPage(currPage)
    onPageChanged(paginationData)
  }

  useEffect(() => {
    goToPage(1)
  }, [])

  return (
    <div>
      <p>testing</p>
    </div>
  )
}
Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  pageNeighbours: PropTypes.number,
  onPageChanged: PropTypes.func,
}

export default Pagination
