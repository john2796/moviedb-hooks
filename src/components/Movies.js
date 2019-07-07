import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import MoviesSlider from './MoviesSlider';
import Tabs from './Tabs';

function Movies() {
  const {
    popular,
    topRated,
    nowPlaying,
    upcoming,
    popularTV,
    topRatedTV,
    airingToday,
    onAirTV,
  } = useSelector(state => state.movieReducer);
  return (
    <>
      <section className="movie-wrap container">
        <div className="title-view-wrap">
          <h2>in theater</h2>
          <span>view all</span>
        </div>
        <Tabs>
          <div label="#popular" state="popular">
            <MoviesSlider label="popular" state={popular} />
          </div>
          <div label="#coming soon" state="upcoming">
            <MoviesSlider label="upcoming" state={upcoming} />
          </div>
          <div label="#top rated" state="topRated">
            <MoviesSlider state={topRated} label="topRated" />
          </div>
          <div label="#most-reviewed" state="nowPlaying">
            <MoviesSlider state={nowPlaying} label="nowPlaying" />
          </div>
        </Tabs>
      </section>

      <section className="onTV-wrap container">
        <div className="title-view-wrap">
          <h2>on tv</h2>
          <span>view all</span>
        </div>
        <Tabs>
          <div label="#popular" state="popularTV">
            <MoviesSlider state={popularTV} label="popularTV" />
          </div>
          <div label="#airing today" state="airingToday">
            <MoviesSlider state={airingToday} label="airingToday" />
          </div>
          <div label="#top rated" state="topRatedTV">
            <MoviesSlider state={topRatedTV} label="topRatedTV" />
          </div>
          <div label="#on the air" state="onAirTV">
            <MoviesSlider state={onAirTV} label="onAirTV" />
          </div>
        </Tabs>
      </section>
    </>
  );
}

export default memo(Movies);
