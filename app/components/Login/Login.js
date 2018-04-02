import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Popover from 'material-ui/Popover';
import {FormControl} from 'material-ui/Form';
import Input, {InputLabel} from 'material-ui/Input';
import './Login.scss';


class Login extends Component {

  state = {
    username: '',
    open: false,
    anchorEl: null
  };

  handleLogin = () => {
    this.props.onLogin({
      username: this.state.username,
      loggedIn: true
    });
  };
  handleWallet = () => {
    this.props.onWallet({
      username: this.state.username,
      loggedIn: true
    });
  };

  handleChange = (e) => {
    this.setState({
      username: e.target.value
    });
  };


  handleClickButton = () => {
    this.setState({
      open: true
    });
  };


  handleClose = () => {
    this.setState({
      open: false,
    });
  };


  render() {

    return (
      <div className="mainLogin">
        <h1>Login to BUFF</h1>

        <FormControl>
          <InputLabel style={{color:"#C8E6C9"}}>
            Username
          </InputLabel>
          <Input id="username"/>
        </FormControl>

        <FormControl>
          <InputLabel style={{color:"#C8E6C9"}}>
            Password
          </InputLabel>
          <Input id="password"
          />
        </FormControl>

        <Button className="btn_login" variant="raised" onClick={this.handleLogin}>Log In</Button>


        <Button
          className="btn_forgot"
          variant="raised"
          onClick={this.handleClickButton}>
          Forgot password? click here!
        </Button>


        <Popover
          open={this.state.open}
          anchorPosition={{top: 200, left: 400}}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}>

          <div>
            <p>
              If you`ve forgotten your password,
              you can use this form to reset it. After resetting,
              a message will be sent to your email address.
              If you do not find the message in your inbox,
              please check if the message did not reach your spam.
            </p>
            <TextField
              required
              id="email"
              label="Your email:"
              defaultValue={this.state.username}
              type="text"
              margin="normal"/>

            <Button
              variant="raised"
              onClick={this.handleClickButton}>
              Send me
            </Button>
          </div>
        </Popover>
      </div>

    );
  }

}

Login.propTypes = {
  children: PropTypes.node,
  onLogin: PropTypes.func.isRequired,
  onWallet: PropTypes.func.isRequired
};

export default Login;
