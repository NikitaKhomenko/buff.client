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
        FlatButton: {
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
const backgroundContainerStyle = ({
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
        this.props.onBackToLogin({
        });
    }

    render() {

        return (
            <CardMedia style={backgroundContainerStyle} image={backgroundFilePath} className={this.props.classes.container}>
                <Grid style={backgroundContainerStyle}>
                    <Button
                        variant="raised"
                        className={this.props.classes.buttonExit}
                        onClick={this.handleBackToLogin}>
                        <font face="verdana" color="#fffff">Back to login</font>
                    </Button>

                    <font face="verdana" color="#C8E6C9">
                        <center><h1>Registration</h1></center>
                    </font>

                    <Grid container spacing={24}>
                        <Grid item xs={12} container>
                            <Grid item xs={12}></Grid>
                            <Grid item xs={6}>
                                <center>
                                    <FormControl className={this.props.classes.formControl}>
                                        <InputLabel
                                            formcontrolclasses={{
                                                focused: this.props.classes.inputLabelFocused,

                                            }}
                                            htmlFor="username"
                                        >

                                            <font color="#C8E6C9">First Name</font>
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
                                            formcontrolclasses={{
                                                focused: this.props.classes.inputLabelFocused,
                                            }}
                                            htmlFor="password"
                                        >
                                            <font color="#C8E6C9">Last Name</font>
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
                                            formcontrolclasses={{
                                                focused: this.props.classes.inputLabelFocused,
                                            }}
                                            htmlFor="Email address"
                                        >
                                            <font color="#C8E6C9">Username</font>
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
                                            formcontrolclasses={{
                                                focused: this.props.classes.inputLabelFocused,
                                            }}
                                            htmlFor="Email address"
                                        >
                                            <font color="#C8E6C9">Password</font>
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
                                            formcontrolclasses={{
                                                focused: this.props.classes.inputLabelFocused,
                                            }}
                                            htmlFor="Zip code"
                                        >
                                            <font color="#C8E6C9">Repeat Password</font>
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
                            <Grid item xs={6}>
                                <center>
                                    <FormControl className={this.props.classes.formControl}>
                                        <InputLabel
                                            formcontrolclasses={{
                                                focused: this.props.classes.inputLabelFocused,

                                            }}
                                            htmlFor="username"
                                        >

                                            <font color="#C8E6C9">Email address</font>
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
                                            formcontrolclasses={{
                                                focused: this.props.classes.inputLabelFocused,
                                            }}
                                            htmlFor="password"
                                        >
                                            <font color="#C8E6C9">Repeat Email address</font>
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
                                            formcontrolclasses={{
                                                focused: this.props.classes.inputLabelFocused,
                                            }}
                                            htmlFor="Email address"
                                        >
                                            <font color="#C8E6C9">Country</font>
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
                                            formcontrolclasses={{
                                                focused: this.props.classes.inputLabelFocused,
                                            }}
                                            htmlFor="Email address"
                                        >
                                            <font color="#C8E6C9">City</font>
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
                                            formcontrolclasses={{
                                                focused: this.props.classes.inputLabelFocused,
                                            }}
                                            htmlFor="Zip code"
                                        >
                                            <font color="#C8E6C9">Street</font>
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
                        </Grid>
                    </Grid>

                </Grid>
            </CardMedia>
        );
    }
}

Registration.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Registration);
