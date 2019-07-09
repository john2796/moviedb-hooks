/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import ReactPlayer from 'react-player';

function SpmOverview() {
  // Select all state from reducer
  const {
    spMovie, spReviews, spCast, spMediamovie, spRelatedMovie, spKeyword,
  } = useSelector(
    state => state.movieReducer,
  );
  // desctructure spMovie
  const { overview } = spMovie;
  // filter videos to only show 4
  const filteredVideos = spMediamovie.filter((_, idx) => idx <= 3);

  console.log(filteredVideos);
  return (
    <div className="spm-overview">
      <div className="spm-overview-left">
        <p>{overview}</p>
        <div className="title-hd-sm">
          <h4>
            videos
            <span>
              All
              {spMediamovie.length}
              videos
            </span>
          </h4>
          <div className="sp-videos-wrap">
            {filteredVideos.map(item => (
              <div className="sp-video-item" key={item.id}>
                <div className="player-wrapper">
                  <ReactPlayer
                    className="react-player"
                    url={`https://www.youtube.com/watch?v=${item.key}`}
                    width="100%"
                    height="100%"
                    controls
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <h4>
          cast
          <span>Full Cast & Crew</span>
        </h4>
      </div>

      <div className="spm-overview-right">
        <h6>Director:</h6>
        <p>etc</p>
        <h6>Writer:</h6>
        <p>etc</p>
        <h6>Stars:</h6>
        <p>etc</p>
        <h6>Genres:</h6>
        <p>etc</p>
        <h6>Release Date:</h6>
        <p>etc</p>
        <h6>Run Time:</h6>
        <p>etc</p>
        <h6>MMPA Rating:</h6>
        <p>etc</p>
        <h6>Plot Keywords:</h6>
        <p>superhero , marvel universe </p>
      </div>
    </div>
  );
}

export default SpmOverview;
