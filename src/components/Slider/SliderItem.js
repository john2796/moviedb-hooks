import React from 'react'
import PropTypes from 'prop-types'
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
              .map((item) => {
                return (
                  <LazyLoad
                    key={item.id}
                    once
                    height={200}
                    placeholder={<Placeholder />}
                    debounce={500}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt={item.title}
                    />
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
              .map((item) => {
                return (
                  <LazyLoad
                    key={item.id}
                    once
                    height={200}
                    placeholder={<Placeholder />}
                    debounce={500}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt={item.title}
                    />
                  </LazyLoad>
                )
              })}
        </div>
      </div>
    </>
  )
}

SliderItem.propTypes = {
  state: PropTypes.array,
}
export default SliderItem
https://airtable.com/shrEawWXvMldYbm5Q?prefill_Project+Manager=John%20Benedict%20Miranda%20(WEBPT6)&prefill_Section=WEBPT6&prefill_Present+Students=Andrew %20Johnson,
Cale %20Haug,
Daniel %20Viera,
DaQuan %20Freeman,
Rachell %20Sincere,
Sandy %20Jernigan,
Shaun %20Kolich,
Wayne Mittelstaedt