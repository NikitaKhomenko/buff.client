import React from 'react';
import { Switch, Route } from 'react-router';

import LoginPage from './containers/LoginPage';
import WalletPage from './containers/WalletPage';
import LoggedInPage from './containers/LoggedInPage';
import RegistrationPage from './containers/RegistrationPage';
import Dashboard from "./components/Dashboard/Dashboard";
import History from "./components/History/History";


export default (
  <Switch >
    <Route exact path="/" component={LoginPage} />
    <Route exact path="/loggedin" component={LoggedInPage} />
    <Route exact path="/Registration" component={RegistrationPage} />
      {/*// TODO implement private route after authenticating*/}
      {/*// like this https://reacttraining.com/react-router/web/example/auth-workflow*/}
      <Route exact path="/wallet" component={WalletPage} />
  </Switch>
);
