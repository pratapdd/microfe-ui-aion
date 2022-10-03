import { Route, Router, Switch } from 'react-router-dom';

import Timeline from './components/Timeline';
import React from 'react';

export default ({ history }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" component={Timeline} />
        </Switch>
      </Router>
    </div>
  );
};
