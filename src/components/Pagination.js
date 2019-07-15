/* eslint-disable react/no-array-index-key */
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import '../SCSS/pagination.scss'

const LEFT_PAGE = 'LEFT'
const RIGHT_PAGE = 'RIGHT'

const range = (from, to, step = 1) => {
  let i = from
  const ranges = []

  while (i <= to) {
    ranges.push(i)
    i += step
  }

  return ranges
}

class Pagination extends Component {
  constructor(props) {
    super(props)
    // desctructure all props -> totalRecords, pageLimit, pageNeighbours
    const { totalRecords = null, pageLimit = 30, pageNeighbours = 0 } = props
    // if type of === number use pageLimit props else default to 30
    this.pageLimit = typeof pageLimit === 'number' ? pageLimit : 30
    // if type of === number use totalRecords props else default to 0
    this.totalRecords = typeof totalRecords === 'number' ? totalRecords : 0
    // if type of === number use pageNeighbours props else default to 0
    this.pageNeighbours = typeof pageNeighbours === 'number' ? Math.max(0, Math.min(pageNeighbours, 2)) : 0

    // total pages Math.ceil round up/down num, total / pagelimit
    this.totalPages = Math.ceil(this.totalRecords / this.pageLimit)
    // state currentPage default to 1
    this.state = { currentPage: 1 }
  }

  // on page load set go to page to one
  // componentDidMount() {
  //   this.gotoPage(1)
  // }

  // Go to page func takes page as param
  gotoPage = (page) => {
    // desctructure onPageChanged func coming from related movies
    const { onPageChanged = f => f } = this.props
    // return min num between the page and totalPages , and the max between 0 min
    const currentPage = Math.max(0, Math.min(page, this.totalPages))
    // store all payload necessary to update paginatino
    const paginationData = {
      currentPage,
      totalPages: this.totalPages,
      pageLimit: this.pageLimit,
      totalRecords: this.totalRecords,
    }
    // when goToPage is invoke it will update state, then update onPageChaned with the payload
    this.setState({ currentPage }, () => onPageChanged(paginationData))
  }

  // when clicking on nums it will invoke goToPage func
  handleClick = (page, evt) => {
    evt.preventDefault()
    this.gotoPage(page)
  }

  // hand left move page
  handleMoveLeft = (evt) => {
    // prevent from reloading page
    evt.preventDefault()
    // desctructure currentPage state
    const { currentPage } = this.state
    // then invoke goToPage when left handle is clicked
    this.gotoPage(currentPage - this.pageNeighbours * 2 - 1)
  }

  // hand right move page
  handleMoveRight = (evt) => {
    // prevent from reloading page
    evt.preventDefault()
    // desctructure currentPage state
    const { currentPage } = this.state
    // then invoke goToPage when right handle is clicked
    this.gotoPage(currentPage + this.pageNeighbours * 2 + 1)
  }

  fetchPageNumbers = () => {
    const { totalPages } = this
    const { currentPage } = this.state
    const { pageNeighbours } = this

    const totalNumbers = this.pageNeighbours * 2 + 3
    const totalBlocks = totalNumbers + 2

    if (totalPages > totalBlocks) {
      let pages = []

      const leftBound = currentPage - pageNeighbours
      const rightBound = currentPage + pageNeighbours
      const beforeLastPage = totalPages - 1

      const startPage = leftBound > 2 ? leftBound : 2
      const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage

      pages = range(startPage, endPage)

      const pagesCount = pages.length
      const singleSpillOffset = totalNumbers - pagesCount - 1

      const leftSpill = startPage > 2
      const rightSpill = endPage < beforeLastPage

      const leftSpillPage = LEFT_PAGE
      const rightSpillPage = RIGHT_PAGE

      if (leftSpill && !rightSpill) {
        const extraPages = range(startPage - singleSpillOffset, startPage - 1)
        pages = [leftSpillPage, ...extraPages, ...pages]
      } else if (!leftSpill && rightSpill) {
        const extraPages = range(endPage + 1, endPage + singleSpillOffset)
        pages = [...pages, ...extraPages, rightSpillPage]
      } else if (leftSpill && rightSpill) {
        pages = [leftSpillPage, ...pages, rightSpillPage]
      }

      return [1, ...pages, totalPages]
    }

    return range(1, totalPages)
  }

  render() {
    if (!this.totalRecords) return null
    if (this.totalPages === 1) return null

    const { currentPage } = this.state
    const pages = this.fetchPageNumbers()

    return (
      <Fragment>
        <nav aria-label="Pagination" className="pagination-nav">
          <p className="pag-total-page">{`Page ${currentPage} of ${this.totalPages}`}</p>
          <ul className="pagination">
            {pages.map((page, index) => {
              if (page === LEFT_PAGE) {
                return (
                  <li key={index} className="page-item">
                    <a
                      className="page-link"
                      href="/#"
                      aria-label="Previous"
                      onClick={this.handleMoveLeft}
                    >
                      <span aria-hidden="true">&laquo;</span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                )
              }

              if (page === RIGHT_PAGE) {
                return (
                  <li key={index} className="page-item">
                    <a
                      className="page-link"
                      href="/#"
                      aria-label="Next"
                      onClick={this.handleMoveRight}
                    >
                      <span aria-hidden="true">&raquo;</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                )
              }

              return (
                <li key={index} className="page-item">
                  <a
                    className={`page-link ${currentPage === page ? ' active' : ''}`}
                    href="/#"
                    onClick={e => this.handleClick(page, e)}
                  >
                    {page}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </Fragment>
    )
  }
}

Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  pageNeighbours: PropTypes.number,
  onPageChanged: PropTypes.func,
}

export default Pagination
