import React from 'react';
import { Switch, Route } from 'react-router';

import LoginPage from './containers/LoginPage';
import WalletPage from './containers/WalletPage';
import LoggedInPage from './containers/LoggedInPage';

export default (
  <Switch >
    <Route exact path="/" component={LoginPage} />
    <Route exact path="/loggedin" component={LoggedInPage} />
    <Route exact path="/wallet" component={WalletPage} />
  </Switch>
);
