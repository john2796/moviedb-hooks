/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, memo } from 'react'
import Slider from 'react-slick'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux'
import { getTrendingPeople } from '../store/actions/movieAction'

const dummyTrailer = [
  {
    id: '58ba5859925141606f019801',
    key: '1Q8fG0TtVAY',
    name: 'WONDER WOMAN',
    poster_path: '/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg',
    time: '2:30',
  },
  {
    id: '5cc5821a9251415d3bf42f72',
    key: 'tx6_JMDFfWI',
    name: 'Oblivion',
    poster_path: '/hmOzkHlkGvi8x24fYpFSnXvjklv.jpg',
    time: '2:30',
  },
  {
    id: '58bde2c9c3a368668604a10f',
    key: '44LdLqgOpjo',
    name: 'Kong: Skull Island - Rise of the King',
    type: 'Trailer',
    poster_path: '/r2517Vz9EhDhj88qwbDVj8DCRZN.jpg',
    time: '2:43',
  },
  {
    id: '5c8a4d5b0e0a267d08c32f18',
    key: 'hA6hldpSTF8',
    name: "Marvel Studios' Avengers",
    poster_path: '/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
    time: '2:25',
  },
  {
    id: '5743a07a9251414c0d000605',
    key: 'c38r-SAnTWM',
    name: 'Beauty and the Beast Official US Teaser Trailer',
    poster_path: '/tWqifoYuwLETmmasnGHO7xBjEtt.jpg',
    time: '1:30',
  },
  {
    id: '5c8ad92b9251415249c0b099',
    key: 'Y_JGZTlUbZg',
    name: 'Captain Marvel',
    poster_path: '/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg',
    time: '0:30',
  },
  {
    id: '5c40c5ef9251416b02b10d44',
    key: 'M7XM597XO94',
    name: 'John Wick: Chapter 3 – Parabellum',
    poster_path: '/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg',
    time: '2:30',
  },
]
function Trailer() {
  const { trendingPeople } = useSelector(state => state.movieReducer)
  const [currTrailer, setCurrTrailer] = useState('https://www.youtube.com/watch?v=1Q8fG0TtVAY')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTrendingPeople())
  }, [dispatch])
  const filterTrendingPeople = trendingPeople.filter(o => o.profile_path !== null)

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    focusOnSelect: true,
    afterChange(currentSlide) {
      const { key } = dummyTrailer[currentSlide]
      setCurrTrailer(`https://www.youtube.com/watch?v=${key}`)
    },
  }

  return (
    <>
      <section className="darkbg">
        <div className="main-flex container">
          {/* ----- trailer carousel -------- */}
          <div className="main-left-section">
            <div className="title-wrap">
              <h2>in theater</h2>
              <p>view all</p>
            </div>
            <div className="trailer-carousel">
              <div className="youtube">
                <div className="player-wrapper">
                  <ReactPlayer
                    className="react-player"
                    url={currTrailer}
                    width="100%"
                    height="100%"
                    controls
                  />
                </div>
              </div>
              <div className="control lightBg">
                <Slider {...settings} className="trailer-slideWrap">
                  {dummyTrailer.map(item => (
                    <div
                      className="slide-item"
                      key={item.id}
                      onClick={() => setCurrTrailer(`{https://www.youtube.com/watch?v=${item.key}}`)
                      }
                    >
                      <div
                        className="slide-bg"
                        style={{
                          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${
                            item.poster_path
                          })`,
                        }}
                      />
                      <h4 className="desc">
                        {item.name}
                        <p className="time">{item.time}</p>
                      </h4>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
          {/* ----- right side of trailer section ----- */}
          <div className="main-right-section">
            <h4 className="sb-title  ">Spotlight Celebrities</h4>
            {filterTrendingPeople.map(item => (
              <div className="mr-content" key={item.id}>
                <img src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} alt={item.name} />
                <div>
                  <h6>{item.name}</h6>
                  <span>ACTOR</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default memo(Trailer)
