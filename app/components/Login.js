import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Login extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
    onWallet: PropTypes.func.isRequired
  };

  state = {
    username: ''
  };

  handleLogin = () => {
    this.props.onLogin({
      username: this.state.username,
      loggedIn: true
    });
  }
  handleWallet = () => {
    this.props.onLogin({
      username: this.state.username,
      loggedIn: true
    });
  }

  handleChange = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <input onChange={this.handleChange} type="text" value={this.state.username} />
        <button onClick={this.handleLogin}>Log In</button>
        <button onClick={this.handleWallet}>Wallet</button>
      </div>
    );
  }
}
