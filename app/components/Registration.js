import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import CardMedia from "material-ui/Card/CardMedia";
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import green from 'material-ui/colors/green';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

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
const backgroundFilePath = 'assets/Materials/Registration_background.jpg';
const loginContainerStyle = ({
    width: '100%',
    height:'100%',
    align: 'center'
});

class Registration extends Component {

    state = {
        username: '',
        open: false,
        anchorEl: null
    }

    handleBackToLogin = () => {

    }

    render() {

        return (
            <CardMedia style={loginContainerStyle} image={backgroundFilePath} className={this.props.classes.container}>
                <Grid style={loginContainerStyle}>
                    <Button
                        variant="raised"
                        className={this.props.classes.buttonExit}
                        onClick={this.handleBackToLogin}>
                        Back to login
                    </Button>

                    <font face="verdana" color="#C8E6C9">
                        <center><h1>Registration</h1></center>
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

                    <center>
                        <FormControl className={this.props.classes.formControl}>
                            <InputLabel
                                FormControlClasses={{
                                    focused: this.props.classes.inputLabelFocused,
                                }}
                                htmlFor="Email address"
                            >
                                <font color="#C8E6C9">Email address</font>
                            </InputLabel>
                            <Input
                                classes={{
                                    underline: this.props.classes.inputUnderline,
                                    focused: this.props.classes.inputLabelFocused,
                                }}
                                id="Email address"
                            />
                        </FormControl>
                    </center>

                    <center>
                        <FormControl className={this.props.classes.formControl}>
                            <InputLabel
                                FormControlClasses={{
                                    focused: this.props.classes.inputLabelFocused,
                                }}
                                htmlFor="Email address"
                            >
                                <font color="#C8E6C9">Residence</font>
                            </InputLabel>
                            <Input
                                classes={{
                                    underline: this.props.classes.inputUnderline,
                                    focused: this.props.classes.inputLabelFocused,
                                }}
                                id="Email address"
                            />
                        </FormControl>
                    </center>

                    <center>
                        <FormControl className={this.props.classes.formControl}>
                            <InputLabel
                                FormControlClasses={{
                                    focused: this.props.classes.inputLabelFocused,
                                }}
                                htmlFor="Zip code"
                            >
                                <font color="#C8E6C9">Zip code</font>
                            </InputLabel>
                            <Input
                                classes={{
                                    underline: this.props.classes.inputUnderline,
                                    focused: this.props.classes.inputLabelFocused,
                                }}
                                id="Zip code"
                            />
                        </FormControl>
                    </center>


                </Grid>
            </CardMedia>
        );
    }
}

Registration.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    onLogin: PropTypes.func.isRequired,
    onWallet: PropTypes.func.isRequired
};

export default withStyles(styles)(Registration);
