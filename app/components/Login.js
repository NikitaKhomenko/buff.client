import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import CardMedia from "material-ui/Card/CardMedia";
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Popover from "material-ui/Popover";
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import green from 'material-ui/colors/green';
import { withStyles } from 'material-ui/styles';

const styles  = theme => {
    return ({
        root: {
            flexGrow: 1,
        },
        button: {
            marginBottom: theme.spacing.unit * 4,
            backgroundColor: green[300],
        },
        buttonExit: {
            marginBottom: theme.spacing.unit * 4,
            backgroundColor: green[800],
        },
        flatbutton: {
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
};
const backgroundFilePath = 'assets/Materials/login_background.jpg';
const loginContainerStyle = ({
    width: '100%',
    height:'100%',
    align: 'center'
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
    }

    handleRegistration = () => {
        this.props.onRegister({
            loggedIn: false
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


    handleForgotPassword = () => {
        this.setState({
            open: true
        });
    }


    handleCloseForgotPassword = () => {
        this.setState({
            open: false,
        });
    }

    handleCloseApp = () => {
        const remote = require('electron').remote
        let w = remote.getCurrentWindow()
        w.close()
    }


    render() {

        return (
            <CardMedia style={loginContainerStyle} image={backgroundFilePath} className={this.props.classes.container}>
                <Grid style={loginContainerStyle}>
                    <Button
                        variant="raised"
                        className={this.props.classes.buttonExit}
                        onClick={this.handleCloseApp}>
                        Exit
                    </Button>

                    <font face="verdana" color="#C8E6C9">
                        <center><h1>Login to BUFF</h1></center>
                    </font>

                    <center>
                        <FormControl className={this.props.classes.formControl}>
                            <InputLabel
                                FormControlClasses={{
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
                            />
                        </FormControl>
                    </center>

                    <center>
                        <FormControl className={this.props.classes.formControl}>
                            <InputLabel
                                FormControlClasses={{
                                    focused: this.props.classes.inputLabelFocused,
                                }}
                                htmlFor="password"
                            >
                                <font color="#C8E6C9">Password</font>
                            </InputLabel>
                            <Input
                                classes={{
                                    underline: this.props.classes.inputUnderline,
                                    focused: this.props.classes.inputLabelFocused,
                                }}
                                id="password"
                            />
                        </FormControl>
                    </center>


                    <h3></h3>

                    <center>
                        <Button
                            variant="raised"
                            className={this.props.classes.button}
                            onClick={this.handleLogin}>
                            Log In
                        </Button>
                    </center>

                    <center>
                        <Button
                            variant="raised"
                            className={this.props.classes.button}
                            onClick={this.handleRegistration}>
                            Not registered yet? Click here!
                        </Button>
                    </center>

                    <center>
                        <flatbutton
                            className={this.props.classes.flatbutton}
                            onClick={this.handleForgotPassword}>
                            <font face="verdana" color="#C8E6C9">
                            Forgot password? click here!
                            </font>
                        </flatbutton>
                    </center>

                    <h1> </h1>
                    <Popover
                        open={this.state.open}
                        anchorPosition={{top: 200, left: 400}}
                        onClose={this.handleCloseForgotPassword}
                        anchorOrigin={{
                            vertical: 'center',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'center',
                            horizontal: 'center',
                        }}>

                        <div className={this.props.classes.typography} color="#212121">
                            <p><font face="verdana" >
                                If you've forgotten your password,
                                you can use this form to reset it. After resetting,
                                a message will be sent to your email address.
                                If you do not find the message in your inbox,
                                please check if the message did not reach your spam.
                            </font> </p>
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
                                className={this.props.classes.button}>
                                Send me
                            </Button></center>
                        </div>
                    <center>
                        <button
                        className={this.props.classes.flatbutton}
                            onClick={this.handleCloseForgotPassword}>
                            <font face="verdana">
                                CLOSE
                            </font>
                        </button>
                    </center>
                    </Popover>

                </Grid>
            </CardMedia>
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
