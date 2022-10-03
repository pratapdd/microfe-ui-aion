import React, { Suspense, lazy } from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import { Feedback } from './components/Feedback';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { ProgressBar } from './components/ProgressBar';
import { Internal } from './components/Internal';
import { createBrowserHistory } from 'history';

// Lazy load components
const WorkstationLazy = lazy(() => import('./pages/WorkstationApp'));
const BloomLazy = lazy(() => import('./pages/BloomApp'));
const VuejsLazy = lazy(() => import('./pages/VuejsApp'));

const history = createBrowserHistory();

export default () => {
  return (
    <Router history={history}>
      <div className="flex h-screen font-librefranklin">
        <div className="w-60 custom-blue-800">
          <Navigation />
        </div>
        <div className="flex flex-col w-full h-full overflow-y-auto">
          <Suspense fallback={<ProgressBar />}>
            <div className="sticky top-0 z-10 w-full bg-white h-14">
              <Header />
            </div>
            <div className="w-full">
              <Switch>
                <Route path="/workstation">
                  <WorkstationLazy />
                </Route>
                <Route path="/bloom">
                  <BloomLazy />
                </Route>
                <Route path="/vuejs">
                  <VuejsLazy />
                </Route>
                <Route path="/internal">
                  <Internal />
                </Route>
                <Route path="/feedback">
                  <Feedback />
                </Route>
                <Route path="/" component={BloomLazy} />
              </Switch>
            </div>
          </Suspense>
        </div>
      </div>
    </Router>
  );
};
