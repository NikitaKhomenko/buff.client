import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import CardMedia from 'material-ui/Card/CardMedia';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Popover from 'material-ui/Popover';
import {FormControl} from 'material-ui/Form';
import Input, {InputLabel} from 'material-ui/Input';
import green from 'material-ui/colors/green';
import {withStyles} from 'material-ui/styles';
import './Login.scss';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
  button: {
    marginBottom: theme.spacing.unit * 4,
  },
  typography: {
    margin: theme.spacing.unit * 2,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  inputLabelFocused: {
    color: green[100],
  },
  inputUnderline: {
    '&:after': {
      backgroundColor: green[100],
    },
    '&:before': {
      backgroundColor: green[400],
    },
  },

});



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
        <CardMedia image = { "public/Materials/login_background.jpg"}>
          <Grid>
            <center><h1>Login to BUFF</h1></center>

            <center>
              <FormControl className={this.props.classes.formControl}>
                <InputLabel
                  formcontrolclasses={{
                    focused: this.props.classes.inputLabelFocused,
                  }}
                  htmlFor="username"
                >
                  Username
                </InputLabel>
                <Input
                  classes={{
                    underline: this.props.classes.inputUnderline,
                  }}
                  id="username"
                />
              </FormControl>
            </center>

            <center>
              <FormControl className={this.props.classes.formControl}>
                <InputLabel
                  formcontrolclasses={{
                    focused: this.props.classes.inputLabelFocused,
                  }}
                  htmlFor="password"
                >
                  Password
                </InputLabel>
                <Input
                  classes={{
                    underline: this.props.classes.inputUnderline,
                  }}
                  id="password"
                />
              </FormControl>
            </center>


            <h3></h3>

            <center><Button variant="raised" className={this.props.classes.button} onClick={this.handleLogin}>Log
              In</Button></center>

            <center>
              <Button
                variant="raised"
                className={this.props.classes.button}
                onClick={this.handleClickButton}>
                Forgot password? click here!
              </Button>
            </center>

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

              <div className={this.props.classes.typography}>
                <p>
                  If you`ve forgotten your password,
                  you can use this form to reset it. After resetting,
                  a message will be sent to your email address.
                  If you do not find the message in your inbox,
                  please check if the message did not reach your spam.
                </p>
                <center><TextField
                  required
                  id="email"
                  label="Your email:"
                  defaultValue={this.state.username}
                  type="text"
                  margin="normal"/></center>

                <h3></h3>

                <center><Button
                  variant="raised"
                  className={this.props.classes.button}
                  onClick={this.handleClickButton}>
                  Send me
                </Button></center>
              </div>
            </Popover>

          </Grid>
        </CardMedia>
      </div>

    );
  }

}

Login.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  onLogin: PropTypes.func.isRequired,
  onWallet: PropTypes.func.isRequired
};

export default withStyles(styles)(Login);
