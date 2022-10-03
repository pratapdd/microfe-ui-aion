import { Route, Router, Switch } from 'react-router-dom';

import Bloom from './components/Bloom';
import React from 'react';

export default ({ history }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" component={Bloom} />
        </Switch>
      </Router>
    </div>
  );
};
