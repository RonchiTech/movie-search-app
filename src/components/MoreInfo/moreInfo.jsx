import React, { useState, useEffect } from 'react';
import axios from '../../axios-orders';
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
    <section
      style={{
        height: '80vh',
        width: '100vw',
      }}
    >
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
          height: '100%',
          width: '100%',
        }}
      />
      <p>{movieDetails.title || movieDetails.name}</p>
    </section>
  );
};

export default MoreInfo;
