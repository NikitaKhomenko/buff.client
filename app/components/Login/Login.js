import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Popover from 'material-ui/Popover';
import {FormControl} from 'material-ui/Form';
import Input, {InputLabel} from 'material-ui/Input';
import green from 'material-ui/colors/green';
import {withStyles} from 'material-ui/styles';
import './Login.scss';
import {fakeAuth} from '../../routes';
import {Redirect} from 'react-router-dom';
const styles = theme => {
  return ({
    formControl: {
      marginRight: theme.spacing.unit * 15,
      marginLeft: theme.spacing.unit * 15,
      margin: theme.spacing.unit,
    },
    inputLabelFocused: {
      color: green[100],
    },
    inputUnderline: {
      color: '#fff',
      '&:after': {
        backgroundColor: green[100],
      },
      '&:before': {
        backgroundColor: green[400],
      },
    },
    flatbutton: {
      marginBottom: theme.spacing.unit * 4,
    },
  });
};

const loginContainerStyle = ({
  width: '100%',
  height: '100%',
  align: 'center',
});


class Login extends Component {

  state = {
    username: '',
    open: false,
    anchorEl: null,
    redirectToReferrer: false
  };

  handleLogin = () => {
    console.log('LOGIN', this.usernameInput.value);
    this.props.onLogin({
      username: this.usernameInput.value,
      loggedIn: true
    });
    fakeAuth.authenticate(() => {
      this.setState({redirectToReferrer: true});
    });
  };

  handleRegistration = () => {
    this.props.onRegister();
  };

  handleChange = (e) => {
    console.log('eeee', e.target.value);
    this.setState({
      username: e.target.value
    });
  };


  handleForgotPassword = () => {
    this.setState({
      open: true
    });
  };


  handleCloseForgotPassword = () => {
    this.setState({
      open: false,
    });
  };

  handleCloseApp = () => {
    const remote = require('electron').remote;
    let w = remote.getCurrentWindow();
    w.close();
  };


  render() {
    const {from} = this.props.location.state || {from: {pathname: '/'}};
    const {redirectToReferrer} = this.state;
    if (redirectToReferrer) {
      return <Redirect to={from}/>;
    }

    return (
      <div className="LoginMain">
        <div style={loginContainerStyle} className="container">
          <Grid style={loginContainerStyle}>
            <Button
              style={{position: 'absolute', top: 0, right: 0}}
              variant="raised"
              className="buttonExit"
              onClick={this.handleCloseApp}>
              <font face="verdana" color="#fffff">Exit</font>
            </Button>

            <font face="verdana" color="#C8E6C9">
              <h1>Login to BUFF</h1>
            </font>

            <FormControl className={this.props.classes.formControl}>
              <InputLabel
                formcontrolclasses={{
                  focused: this.props.classes.inputLabelFocused,

                }}
                htmlFor="username"
              >

                <font color="#C8E6C9">Username</font>
              </InputLabel>
              <Input
                classes={{
                  underline: this.props.classes.inputUnderline,
                  focused: this.props.classes.inputLabelFocused,
                }}
                id="username"
                inputRef = {(input) => {this.usernameInput = input}}
                required={true}
              />
            </FormControl>

            <FormControl className={this.props.classes.formControl}>
              <InputLabel
                required={true}
                formcontrolclasses={{
                  focused: this.props.classes.inputLabelFocused,
                }}
                htmlFor="password"
              >
                <font color="#C8E6C9">Password</font>
              </InputLabel>
              <Input
                type="password"
                classes={{
                  underline: this.props.classes.inputUnderline,
                  focused: this.props.classes.inputLabelFocused,
                }}
                id="password"
              />
            </FormControl>
            <Button
              variant="raised"
              className="buttonMain"
              onClick={this.handleLogin}>
              Log In
            </Button>
            <div >
              <Button
                variant="raised"
                className="buttonMain"
                onClick={this.handleRegistration}>
                Not registered yet? Click here!
              </Button>
              <Button
                className={this.props.classes.flatbutton}
                onClick={this.handleForgotPassword}>
                <font face="verdana" color="#C8E6C9">
                  Forgot password? click here!
                </font>
              </Button>
            </div>
            <Popover
              open={this.state.open}
              anchorPosition={{top: 500, left: 400}}
              onClose={this.handleCloseForgotPassword}
              anchorOrigin={{
                vertical: 'center',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'center',
                horizontal: 'center',
              }}>

              <div className="LoginMain">
                <p><font face="verdana" color="black">
                  If you've forgotten your password,
                  you can use this form to reset it. After resetting,
                  a message will be sent to your email address.
                  If you do not find the message in your inbox,
                  please check if the message did not reach your spam.
                </font></p>
                <TextField
                  required
                  id="email"
                  label="Your email:"
                  defaultValue={this.state.username}
                  type="text"
                  margin="normal"/>
                <Button
                  variant="raised"
                  className="buttonMain">
                  Send me
                </Button>
                <button
                  className={this.props.classes.flatbutton}
                  onClick={this.handleCloseForgotPassword}>
                  <font face="verdana">
                    CLOSE
                  </font>
                </button>
              </div>
            </Popover>

          </Grid>
        </div>
      </div>

    );
  }
}


export default withStyles(styles)(Login);
