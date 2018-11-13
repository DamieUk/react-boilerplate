import * as React from 'react';
import { Router, Route, Switch } from 'react-router';
import { history } from './store';
import Main from './pages/layout/Main';
import Onboarding from './pages/on-boarding';

const Routes = () => (
  <Router history={history}>
    <Main>
      <Switch>
        <Route path="/app" component={Onboarding}/>
      </Switch>
    </Main>
  </Router>
);

export default Routes;