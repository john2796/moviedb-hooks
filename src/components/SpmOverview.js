/* eslint-disable camelcase */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import ModalVideo from 'react-modal-video';
import youtubebtn from '../assets/youtube-play-btn.png';

function SpmOverview() {
  // Select all state from reducer
  const {
    spMovie,
    spReviews,
    spCast,
    spMediamovie,
    // spRelatedMovie,
    spKeyword,
    spCrew,
  } = useSelector(state => state.movieReducer);
  const [isOpen, setIsOpen] = useState(false);
  // desctructure spMovie
  const { author, content, url } = spReviews.length && spReviews[0];
  const filteredVideos = spMediamovie.filter((_, idx) => idx <= 3);
  const filteredCast = spCast.filter((_, idx) => idx <= 7);
  const fourCast = spCast.filter((_, idx) => idx <= 4);
  const directors = spCrew.filter(item => item.department === 'Directing');
  const writers = spCrew.filter(item => item.department === 'Writing');

  const {
    overview, backdrop_path, runtime, genres, release_date,
  } = spMovie;
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
        {/* ----- Cast  ----- */}
        <div className="sp-cast-wrap">
          <h4>
            cast
            <span>Full Cast & Crew</span>
          </h4>
          {filteredCast.map(item => (
            <div className="cast-content" key={item.id}>
              <img src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} alt={item.name} />
              <p className="movie-title">{item.name}</p>
              <p className="char-name">{item.character}</p>
            </div>
          ))}
        </div>

        <div className="sp-reviews">
          <h4>
            user reviews
            <span>
              see all
              {spReviews.length}
              reviews
            </span>
          </h4>
          <h3>{author}</h3>
          <p>
            {`${content && content.substring(0, 400)}...`}
            <a href={url} rel="noopener noreferrer" target="_blank">
              read more
            </a>
          </p>
        </div>
      </div>

      {/* ----- Right side of overview ----- */}
      <div className="spm-overview-right">
        <div className="spr-item">
          <h6>Director: </h6>
          {directors.map(item => (
            <p key={item.id}>{item.name}</p>
          ))}
        </div>
        <div className="spr-item">
          <h6>Writer: </h6>
          {writers.map(item => (
            <p key={item.id}>{item.name}</p>
          ))}
        </div>
        <div className="spr-item">
          <h6>Stars: </h6>
          {fourCast.map(item => (
            <p key={item.id}>{item.name}</p>
          ))}
        </div>
        <div className="spr-item">
          <h6>Genres: </h6>
          {genres && genres.map(item => <p key={item.id}>{item.name}</p>)}
        </div>
        <div className="spr-item">
          <h6>Release Date: </h6>
          {release_date}
        </div>
        <div className="spr-item">
          <h6>Run Time: </h6>
          <p>{`${runtime} min`}</p>
        </div>
        <div className="spr-item">
          <h6>Plot Keywords: </h6>
          {spKeyword && spKeyword.map(item => <p key={item.id}>{item.name}</p>)}
        </div>
      </div>
    </div>
  );
}

export default SpmOverview;
