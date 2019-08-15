import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs'
import {
  getUpcoming,
  getPopular,
  getNowPlaying,
  getTopRated,
  getPopularTv,
  getTopRatedTv,
  getAiringTodayTV,
  getOntheAir,
} from '../store/actions/movieAction'

import MoviesSlider from './MoviesSlider'
import DelayedSpinner from './Spinner/DelayedSpinner'

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
    is_nowPlaying_loading,
    is_upcoming_loading,
    is_popular_loading,
    is_movie_loading,
    is_trailerQuery_loading,
    is_popularTV_loading,
    is_topRatedTV_loading,
    is_airingToday_loading,
    is_onAirTV_loading,
    is_trendingPeople_loading,
  } = useSelector(state => state.movieReducer)
  return (
    <>
      <section className="movie-wrap container">
        <div className="title-wrap">
          <h2>in theater</h2>
          <span>view all</span>
        </div>
        {/* MOVIE TAB */}
        <Tabs className="movie-tab">
          <TabList className="movieSlider-nav">
            <Tab>#popular</Tab>
            <Tab>#coming soon</Tab>
            <Tab>#most-reviewed</Tab>
            <Tab>#now playing</Tab>
          </TabList>

          <TabPanel>
            {/* {is_popular_loading ? (
              <DelayedSpinner delay={750} />
            ) : (
            )} */}
            <MoviesSlider action={getPopular} state={popular} />
          </TabPanel>
          <TabPanel>
            <MoviesSlider action={getUpcoming} state={upcoming} />
          </TabPanel>
          <TabPanel>
            <MoviesSlider action={getTopRated} state={topRated} />
          </TabPanel>
          <TabPanel>
            <MoviesSlider action={getNowPlaying} state={nowPlaying} />
          </TabPanel>
        </Tabs>
      </section>

      {/* TV SHOW  */}
      <section className="onTV-wrap container">
        <div className="title-wrap">
          <h2>on tv</h2>
          <span>view all</span>
        </div>
        <Tabs className="movie-tab">
          <TabList className="movieSlider-nav">
            <Tab>#popular</Tab>
            <Tab>#airing</Tab>
            <Tab>#top rated</Tab>
            <Tab>#on the air</Tab>
          </TabList>

          <TabPanel>
            <MoviesSlider name="/tv" action={getPopularTv} state={popularTV} />
          </TabPanel>
          <TabPanel>
            <MoviesSlider name="/tv" action={getAiringTodayTV} state={airingToday} />
          </TabPanel>
          <TabPanel>
            <MoviesSlider name="/tv" action={getTopRatedTv} state={topRatedTV} />
          </TabPanel>
          <TabPanel>
            <MoviesSlider name="/tv" action={getOntheAir} state={onAirTV} />
          </TabPanel>
        </Tabs>
      </section>
    </>
  )
}

export default memo(Movies)
