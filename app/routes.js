import React from 'react';
import { Switch, Route } from 'react-router';

import LoginPage from './containers/LoginPage';
import LoggedInPage from './containers/LoggedInPage';
import RegistrationPage from './containers/RegistrationPage';


export default (
  <Switch >
    <Route exact path="/" component={LoginPage} />
    <Route exact path="/loggedin" component={LoggedInPage} />
    <Route exact path="/Registration" component={RegistrationPage} />
  </Switch>
);
