import React, { useState, useEffect } from 'react';
import axios from '../../axios-orders';
import '../../components/Main/Main.scss'
const MoreInfo = ({
  match: {
    params: { id },
  },
}) => {
  const [movieDetails, setMovieDetails] = useState({});
  console.log(id);
  useEffect(() => {
    axios
      .get(
        `movie/${id}?api_key=9a30efb44012b0aec523edeec314b2d9&language=en-US`
      )
      .then((response) => {
        console.log(response.data);
        setMovieDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <section className="movie-details">
      <div
        className="movie-details__background"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
        }}
      />
      <h2 className="movie-details__title">
        {movieDetails.title || movieDetails.name}
        <span style={{
            fontSize: '1rem'
        }}>  {movieDetails.release_date}</span>
      </h2>
      <p className="movie-details__overview">{movieDetails.overview}</p>
    </section>
  );
};

export default MoreInfo;
