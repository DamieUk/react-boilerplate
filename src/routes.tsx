import * as React from 'react';
import { Router, Route, Switch } from 'react-router';
import { history } from './store';
import Main from 'pages/layout/Main';
import { Dashboard } from 'pages/dashboard';

const Routes = () => (
  <Router history={history}>
    <Main>
      <Switch>
        <Route path="/dashboard" component={Dashboard}/>
      </Switch>
    </Main>
  </Router>
);

export default Routes;