import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import LoginPage from './containers/LoginPage';
import LoggedInPage from './containers/LoggedInPage';
import RegistrationPage from './containers/RegistrationPage';
import Api from './Store/ApiRequests';

export const realAuth = {
  isAuthenticated: false,
  isRegistered: false,
  authenticate(user, cb) {
    return new Promise(isAuthenticated => {
      Api.postLogin(user).then((res) => {
          let user = res.data.user;
          this.isAuthenticated = true;
          isAuthenticated({status: this.isAuthenticated, data: user});
        }
      ).catch((error) => {
        let er = error.response.data.error.message;
        this.isAuthenticated = false;
        isAuthenticated({status: this.isAuthenticated, data: er});
      });
    });
  },
  registration(user, cb) {
    return new Promise(isAuthenticated => {
      Api.postRegister(user).then((res) => {
          let user = res.data.user;
          this.isAuthenticated = true;
          isAuthenticated({status: this.isAuthenticated, data: user});
        }
      ).catch((error) => {
        let er = JSON.stringify(error.response.data.error);
        this.isAuthenticated = false;
        isAuthenticated({status: this.isAuthenticated, data: er});
      });
    });
  },
  signout() {
    this.isAuthenticated = false;
  }
};

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      realAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/loggedin',
            state: {from: props.location}
          }}
        />
      )
    }
  />
);
const NoMatch = ({location}) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);


export default (
  <Switch>
    <Route path="/" exact component={LoginPage}/>
    <Route path="/registration" component={RegistrationPage}/>
    <PrivateRoute path="/loggedin" component={LoggedInPage}/>
    <Route component={NoMatch}/>
  </Switch>
);
