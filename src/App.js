import React, { Suspense } from 'react';
import './App.css';
// import Main from './components/Main/Main';
const MainComponent = React.lazy(() => import('./components/Main/Main'));
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainComponent />
    </Suspense>
  );
}

export default App;
