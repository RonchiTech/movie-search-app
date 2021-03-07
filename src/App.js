import React, { Suspense } from 'react';
import './App.css';
// import Main from './components/Main/Main';
import { Switch, Route,  } from 'react-router-dom';
const MainComponent = React.lazy(() => import('./components/Main/Main'));
const MoreInfoComponent = React.lazy(() =>
  import('./components/MoreInfo/moreInfo')
);
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" exact component={MainComponent} />

        <Route path="/more-info/:id" component={MoreInfoComponent} />
        <Route path="*" exact component={MainComponent} />
      </Switch>
    </Suspense>
  );
}

export default App;
