import React from 'react'
import LazyLoad from 'react-lazyload'
import Placeholder from '../placeholder/Placeholder'

const SliderItem = ({ state }) => {
  return (
    <>
      <div className="slider-wrap">
        <h3 className="slider-title">Popular Movies</h3>
        <div className="slider-item">
          {state
            && state
              .filter((_, idx) => idx < 8)
              .map((item, idx) => {
                return (
                  <LazyLoad
                    key={item.id}
                    once
                    height={200}
                    placeholder={<Placeholder />}
                    debounce={500}
                  >
                    <div className="image-container">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                        alt={item.title}
                      />
                    </div>
                  </LazyLoad>
                )
              })}
        </div>
      </div>
      <div className="slider-wrap">
        <h3 className="slider-title">Trending Now</h3>
        <div className="slider-item">
          {state
            && state
              .filter((_, idx) => idx > 9 && idx < 18)
              .map((item, idx) => {
                return (
                  <LazyLoad
                    key={item.id}
                    once
                    height={200}
                    placeholder={<Placeholder />}
                    debounce={500}
                  >
                    <div className="image-container">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                        alt={item.title}
                      />
                    </div>
                  </LazyLoad>
                )
              })}
        </div>
      </div>
    </>
  )
}

export default SliderItem
