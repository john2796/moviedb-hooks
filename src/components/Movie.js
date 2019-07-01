/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { getSingleMovie } from '../store/actions/movieAction';
import { MovieStyle } from './styles/MovieStyle';

const Movie = ({ match }) => {
  const { movie } = useSelector(state => state.movieReducer);
  const [trailers, setTrailers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('hit useEffect1 ---->');
    const { id } = match.params;
    dispatch(getSingleMovie(id));
  }, [dispatch]);

  useEffect(() => {
    console.log('hit useEffect2 ---->');
    let loaded = !!movie.length;
    async function fetchData() {
      try {
        if (loaded) {
          const { id } = movie[0];
          const response = await axios(
            `https://api.themoviedb.org/3/movie/${id}/videos?api_key=64c2b191aa0739bffd252c8287ae39c1&language=en-US`,
          );
          setTrailers(response.data.results);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
    return () => {
      loaded = false;
    };
  }, [movie]);
  console.log(trailers);

  const m = movie.length && movie[0];
  const trailer = trailers.length && trailers[0];
  return (
    <MovieStyle>
      <div
        className="sp-movie-wrap"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${m.poster_path})`,
        }}
      >
        <div className="sp-top-icons">
          <span>left side</span>
          <span>right side</span>
        </div>
        <div className="sp-content">
          <div className="sp-inner">
            <div className="sp-flex">
              {/* <img src={`https://image.tmdb.org/t/p/w500${m.backdrop_path}`} alt="" /> */}
              <div className="player-wrap">
                <ReactPlayer
                  url={`https://www.youtube.com/embed/${trailer.key}`}
                  className="react-player"
                  width="100%"
                  height="100%"
                  playing
                />
              </div>
              <div className="sp-left-side">
                <h2>{m.title}</h2>
                <p>
                  vote_average:
                  {m.vote_average}
                </p>
                <p>genre goes here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MovieStyle>
  );
};

Movie.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({ id: PropTypes.string }),
    path: PropTypes.string,
    url: PropTypes.string,
  }),
};

export default Movie;
