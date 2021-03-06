import React, { Suspense } from 'react';
// import TopRated from './TopRateds/TopRateds';
// import Popular from './Populars/Populars';
// import Trendings from './Trendings/Trendings';
// import Discover from './Discover/Discover';
const TopRated = React.lazy(() => import('./TopRateds/TopRateds'));
const Populars = React.lazy(() => import('./Populars/Populars'));
const Trendings = React.lazy(() => import('./Trendings/Trendings'));
const Discover = React.lazy(() => import('./Discover/Discover'));
const main = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Trendings />
      <Discover />
      <TopRated />
      <Populars />
    </Suspense>
  );
};
export default main;
