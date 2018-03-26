import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import CardMedia from "material-ui/Card/CardMedia";
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Popover from "material-ui/Popover";


const classes = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

    button: {
        marginBottom: theme.spacing.unit * 4,
    },
    typography: {
        margin: theme.spacing.unit * 2,
    },
});

const backgroundFilePath = 'assets/Materials/login_background.jpg';
const loginContainerStyle = ({
    width: '100%',
    height:'100%',
});


export default class Login extends Component {

    static propTypes = {
        onLogin: PropTypes.func.isRequired,
        onWallet: PropTypes.func.isRequired
    };

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


    handleClickButton = () => {
        this.setState({
            open: true
        });
    }


    handleClose = () => {
         this.setState({
             open: false,
         });
    }



    render(){
        return(
             <CardMedia style={loginContainerStyle} image={backgroundFilePath}>
                 <Grid>
                     <font color="white">
                      <center><h1>Login to BUFF</h1></center>
                     </font>
                <center><TextField
                    required
                    id="username"
                    label="password"
                    defaultValue={this.state.username}
                    type="text"
                    margin="normal"/>
                </center>
                   <h3></h3>
                   <center><TextField
                       required
                       id="password"
                       label="password"
                       defaultValue={this.state.password}
                       type="text"
                       margin="normal"
                /></center>
                <h3></h3>
                <center><Button variant="raised" className={classes.button} onClick={this.handleLogin}>Log In</Button></center>
                   <h3></h3>

               <center>
               <Button
                    variant="raised"
                    className={classes.button}
                    onClick={this.handleClickButton}>
                    Forgot password? click here!
                </Button>
               </center>
                <Popover
                    open={this.state.open}
                    anchorPosition={{ top: 200, left: 400 }}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                    }}>

                    <div className={classes.typography}>
                        <p>
                        If you've forgotten your password,
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
                    </div>
                </Popover>

                <h3></h3>
                <h3></h3>

               </Grid>
        </CardMedia>
        );
    }

}