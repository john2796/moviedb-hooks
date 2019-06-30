import React, { useEffect } from 'react';
import Slider from 'react-slick';

import { useSelector, useDispatch } from 'react-redux';
import { MoviesStyle } from './MainStyle';
import { getAllMovies } from '../../store/actions/movieAction';

export default function Movies() {
  const {
    popular, upcoming, nowPlaying, topRater,
  } = useSelector(state => state.movieReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  const settings = {
    infinite: true,
    speed: 350,
    slidesToShow: 7,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <MoviesStyle>
      <div>
        <h3>upcoming</h3>
        <Slider {...settings}>
          {popular.map(({ title, poster_path, id }) => {
            const imageUrl = `https://image.tmdb.org/t/p/w1280${poster_path}`;
            return (
              <div key={id}>
                <div>
                  <img src={imageUrl} alt={title} style={{ height: 300 }} />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </MoviesStyle>
  );
}

/*
Fetch the following :
1 upcoming
2 popular
3 nowplaying
4 top rated

then create carousel
*/
