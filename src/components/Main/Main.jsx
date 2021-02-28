import React from 'react';
import TopRated from './TopRateds/TopRateds';
import Popular from './Populars/Populars';
import Trendings from './Trendings/Trendings';
import Discover from './Discover/Discover';
const main = () => {
  return (
    <>
      <Trendings />
      <Discover />
      <TopRated />
      <Popular />
    </>
  );
};
export default main;
