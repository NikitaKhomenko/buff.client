import React, { Component } from 'react';
import PropTypes from 'prop-types';
import routes from "../routes";

export default class Login extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
    onWallet: PropTypes.func.isRequired
  };

  state = {
      username: '',
      password: ''
  };

  handleLogin = () => {
    this.props.onLogin({
        username: this.state.username,
        username: this.state.password,

        loggedIn: true
    });
  }
  handleWallet = () => {
    this.props.onLogin({
        username: this.state.username,
        username: this.state.password,
        loggedIn: true
    });
  }

  handleChange = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  render() {
      return <div>
          <center><h1>Login to BUFF</h1></center>
          <center><h3>Username:</h3></center>
          <center><input onChange={this.handleChange} type="text" value={this.state.username}/></center>
          <center><h3>Password:</h3></center>
          <center><input onChange={this.handleChange} type="text" value={this.state.password}/></center>
          <h3></h3>
          <center><button onClick={this.handleLogin}>Log In</button></center>
          <center><button onClick={this.handleWallet}>Wallet</button></center>
      </div>;
  }

}

