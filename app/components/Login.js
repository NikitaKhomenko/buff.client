import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import CardMedia from "material-ui/Card/CardMedia";



const classes = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

const backgroundFilePath = 'assets/Materials/login_background.jpg';
const loginContainerStyle = ({
    backgroundImage:`url(${backgroundFilePath}`,
    width: '100%',
    height:'100%'
});

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
        this.props.onWallet({
            username: this.state.username,
            loggedIn: true
        });
    }

    handleChange = (e) => {
        this.setState({
            username: e.target.value
        });
    }
  handleClick = (e) => {
    console.log("hello111");
  }


  render() {
      return <CardMedia image={backgroundFilePath}>
          <Grid>
              <center><h1>Login to BUFF</h1></center>
              <center><h3>Username:</h3></center>
              <center><input onChange={this.handleChange} type="text" value={this.state.username}/></center>
              <center><h3>Password:</h3></center>
              <center><input onChange={this.handleChange} type="text" value={this.state.password}/></center>
              <h3></h3>
              <center><button onClick={this.handleLogin}>Log In</button></center>
              </Grid>
      </CardMedia>
  };

}
