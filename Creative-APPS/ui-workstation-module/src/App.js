import { Route, Router, Switch } from 'react-router-dom';

import Workstation from './components/Workstation';
import React from 'react';

export default ({ history }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" component={Workstation} />
        </Switch>
      </Router>
    </div>
  );
};
