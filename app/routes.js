import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import LoginPage from './containers/LoginPage';
import LoggedInPage from './containers/LoggedInPage';
import RegistrationPage from './containers/RegistrationPage';
import * as actionTypes from './Store/constant';
import Api from './Store/ApiRequests';

export const realAuth = {
  isAuthenticated: false,
  authenticate(user, cb) {
    return new Promise(isAuthenticated => {
        Api.postLogin(user).then((res) => {
            console.log('RESSSSS:>>>', res);
            this.isAuthenticated = true;
          isAuthenticated(this.isAuthenticated);
          }
        ).catch((error) => {
          console.log('error:::', error);
          this.isAuthenticated = false;
          isAuthenticated(this.isAuthenticated);
        });
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
      realAuth.isAuthenticated ? (
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
