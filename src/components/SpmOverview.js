/* eslint-disable camelcase */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import ModalVideo from 'react-modal-video';
import youtubebtn from '../assets/youtube-play-btn.png';

function SpmOverview() {
  // Select all state from reducer
  const {
    spMovie, spReviews, spCast, spMediamovie, spRelatedMovie, spKeyword,
  } = useSelector(
    state => state.movieReducer,
  );
  const [isOpen, setIsOpen] = useState(false);
  // desctructure spMovie
  const { overview, backdrop_path } = spMovie;
  // filter videos to only show 4
  const filteredVideos = spMediamovie.filter((_, idx) => idx <= 3);
  const filteredCast = spCast.filter((_, idx) => idx <= 7);
  console.log(filteredCast);

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
          {/* ----- movie video ----- */}
          <div className="sp-videos-wrap">
            {filteredVideos.map(item => (
              <div
                className="sp-video-item"
                key={item.id}
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500/${backdrop_path})`,
                }}
              >
                <ModalVideo
                  channel="youtube"
                  isOpen={isOpen[item.id]}
                  videoId={item.key}
                  onClose={() => setIsOpen({ [item.id]: false })}
                />
                <button type="button" onClick={() => setIsOpen({ [item.id]: true })}>
                  <img src={youtubebtn} alt="play" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="sp-cast-wrap">
          <h4>
            cast
            <span>Full Cast & Crew</span>
          </h4>
          {filteredCast.map(item => (
            <div className="cast-content" key={item.id}>
              <img src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} alt={item.name} />
              <p className="movie-title">movie name</p>
              <p className="char-name">{item.character}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ----- Right side of overview ----- */}
      <div className="spm-overview-right">
        <p>reviews</p>
      </div>
    </div>
  );
}

export default SpmOverview;
