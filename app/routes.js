import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import LoginPage from './containers/LoginPage';
import LoggedInPage from './containers/LoggedInPage';
import RegistrationPage from './containers/RegistrationPage';

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    // setTimeout(cb, 100); // fake async
    // return this.isAuthenticated;
    return new Promise(isAuthenticated => {
      setTimeout(() => {isAuthenticated(this.isAuthenticated);}, 100);
    });
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/loggedin",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);



export default (
  <Switch >
    <Route path="/" exact component={LoginPage} />
    <Route path="/registration" component={RegistrationPage} />
    <PrivateRoute path="/loggedin" component={LoggedInPage} />
    <Route component={NoMatch} />
  </Switch>
);
