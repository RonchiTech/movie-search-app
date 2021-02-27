import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel, { consts } from 'react-elastic-carousel';
import BackArrow from '../../../assets/images/backarrow.svg';
import ForwardArrow from '../../../assets/images/forwardarrow.svg';
import '../Main.css';
const Populars = () => {
  const [topRateds, setTopRateds] = useState([]);

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <img className="Arrow" src={BackArrow} alt="BackArrow" />
      ) : (
        <img className="Arrow" src={ForwardArrow} alt="ForwardArrow" />
      );
    return (
      <button onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    );
  };
  const breakPoints = [
    { width: 320, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 3 },
    { width: 1450, itemsToShow: 5, itemsToScroll: 5 },
    { width: 1750, itemsToShow: 6, itemsToScroll: 5 },
  ];

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=9a30efb44012b0aec523edeec314b2d9&language=en-US&page=1&region=PH'
      )
      .then((response) => {
        console.log(response.data.results);
        setTopRateds(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  let display;
  if (topRateds.length > 1) {
    display = (
      <Carousel
        showEmptySlots={false}
        renderArrow={myArrow}
        breakPoints={breakPoints}
        itemPadding={[15, 0]}
      >
        {topRateds.map((movie) => {
          return (
            <img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
            />
          );
        })}
      </Carousel>
    );
  }
  return (
    <div>
      <h2>Popular in Philippines</h2>
      {display}
    </div>
  );
};
export default Populars;
