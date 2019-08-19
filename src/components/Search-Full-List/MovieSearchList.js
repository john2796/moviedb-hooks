/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState, useRef } from 'react'
import './searchList.scss'
import PropTypes from 'prop-types'

import { useSelector, useDispatch } from 'react-redux'
import scrollToComponent from 'react-scroll-to-component'
import { getListing } from '../../store/actions/movieAction'

import Navbar from '../Navbar'
import Footer from '../Footer'
import SearchMovie from '../SearchMovie'
import CustomPagination from '../Custom-pagination/CustomPagination'
import DelayedSpinner from '../Spinner/DelayedSpinner'

const MovieSearchList = ({
  name, type, topic = 'popular', history,
}) => {
  const [count, setCount] = useState(1)
  const { listing, is_listing_loading } = useSelector(state => state.movieReducer)
  const dispatch = useDispatch()
  const movieEl = useRef(null)
  const upEl = useRef(null)

  useEffect(() => {
    dispatch(getListing(topic, type, count))
  }, [count, dispatch, topic, type])

  const scrollToTop = () => {
    scrollToComponent(upEl.current, {
      offset: 0,
      align: 'bottom',
      duration: 1000,
      ease: 'inCirc',
    })
  }
  const goToNext = () => {
    if (count >= listing.total_pages) return
    scrollToComponent(movieEl.current, {
      offset: 400,
      align: 'bottom',
      duration: 1000,
      ease: 'linear',
    })
    setCount(count + 1)
  }
  const goToPrev = () => {
    if (count <= 1) return
    scrollToComponent(movieEl.current, {
      offset: 400,
      align: 'bottom',
      duration: 1000,
      ease: 'linear',
    })
    setCount(count - 1)
  }

  const sendToSinglePage = (id) => {
    history.push(`/${type}/${id}`)
  }
  const img = listing && listing.results && listing.results[0].backdrop_path
  const poster = `https://image.tmdb.org/t/p/w1280${img}`
  let results
  if (listing.results && listing.results.length === 0) {
    results = <h2>No Results Found...</h2>
  } else if (is_listing_loading) {
    results = <DelayedSpinner delay={750} />
  } else {
    results = listing.results
      && listing.results
        .filter(res => res.poster_path !== null)
        .map((item) => {
          return (
            <div className="listing-item" key={item.id}>
              <img
                onClick={() => sendToSinglePage(item.id)}
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
              />
            </div>
          )
        })
  }
  return (
    <>
      <div className="bg-overlay" ref={upEl}>
        <div className="container" ref={movieEl}>
          <Navbar />
          <SearchMovie text={name} />
          <div
            className="search-title-bg"
            style={{
              background: `url(${poster}) no-repeat center top / cover`,
            }}
          >
            <h3 className="search-title">{name}</h3>
          </div>
        </div>
      </div>
      <div className="container search-container">
        <div className="search-content">
          {/* SEARCH FOUND info */}
          <div className="search-found brT brB">
            <p>
              Found
              <span className="text-blue search-span">{`${listing.total_results} ${name}`}</span>
              in total
            </p>
          </div>
          {/* LISTING ITEMS */}
          <div className="search-result">{results}</div>
        </div>

        <CustomPagination count={count} data={listing} goToNext={goToNext} goToPrev={goToPrev} />
      </div>
      <Footer scrollToTop={scrollToTop} />
    </>
  )
}

MovieSearchList.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  topic: PropTypes.string,
}
export default MovieSearchList
