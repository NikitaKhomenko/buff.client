import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import {FormControl} from 'material-ui/Form';
import Input, {InputLabel} from 'material-ui/Input';
import green from 'material-ui/colors/green';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import './Registration.scss';
import {realAuth} from '../../routes';
import {Redirect} from 'react-router-dom';
import {FormHelperText} from "material-ui";
import red from "material-ui/es/colors/red";


const styles = theme => {
    return ({
        formControl: {
            margin: theme.spacing.unit * 1.5,
            width: 260,
        },
        inputLabelFocused: {
            color: green[100],
        },
        listCountries: {
            marginTop: theme.spacing.unit * 3,
        },
        FormHelperText: {
            color: red[500],
        },
        inputUnderline: {
            color: '#fff',
            '&:after': {
                backgroundColor: green[100],
            },
            '&:before': {
                backgroundColor: green[300],
            },
        },
    });
};


const options = [
    'Country', 'Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and/or Barbuda', 'Argentina', 'Armenia',
    'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia',
    'Bosnia and Herzegovina', 'Botswana', 'Bouvet Island', 'Brazil', 'British lndian Ocean Territory', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia',
    'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo',
    'Cook Islands', 'Costa Rica', 'Croatia (Hrvatska)', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecudaor', 'Egypt',
    'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands (Malvinas)', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'France, Metropolitan',
    'French Guiana', 'French Polynesia', 'French Southern Territories', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe',
    'Guam', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and Mc Donald Islands', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia',
    'Iran (Islamic Republic of)', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati',
    'Korea, Democratic People`s Republic of', 'Korea, Republic of', 'Kuwait', 'Kyrgyzstan', 'Lao People`s Democratic Republic', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia',
    'Libyan Arab Jamahiriya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands',
    'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Micronesia, Federated States of', 'Moldova, Republic of', 'Monaco', 'Mongolia', 'Montserrat', 'Morocco',
    'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue',
    'Norfork Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn', 'Poland',
    'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russian Federation', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa',
    'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa',
    'South Georgia South Sandwich Islands', 'Spain', 'Sri Lanka', 'St. Helena', 'St. Pierre and Miquelon', 'Sudan', 'Suriname', 'Svalbarn and Jan Mayen Islands', 'Swaziland',
    'Sweden', 'Switzerland', 'Syrian Arab Republic', 'Taiwan', 'Tajikistan', 'Tanzania, United Republic of', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia',
    'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'United States minor outlying islands', 'Uruguay',
    'Uzbekistan', 'Vanuatu', 'Vatican City State', 'Venezuela', 'Vietnam', 'Virigan Islands (British)', 'Virgin Islands (U.S.)', 'Wallis and Futuna Islands', 'Western Sahara',
    'Yemen', 'Yugoslavia', 'Zaire', 'Zambia', 'Zimbabwe'
];


class Registration extends Component {
    state = {
        isLoading: false,
        username: '',
        fullname: '',
        confPassword: '',
        confEmail: '',
        email: '',
        password: '',
        emailIsEquel: '',
        passwordIsEquel: '',
        open: false,
        anchorEl: null,
        selectedIndex: 1,
    };
    handleChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        });
    };
    handleChangeFullName = (e) => {
        this.setState({
            fullname: e.target.value
        });
    };
    handleChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    };
    handleChangeConfEmail= (e) => {
        this.setState({
            confEmail: e.target.value,
        });
    };
    handleChangeConfPassword= (e) => {
        this.setState({
            confPassword: e.target.value,
        });
    };
    handleChangePassword= (e) => {
        this.setState({
            password: e.target.value
        });
    };
    handleBackToLogin = () => {
        this.props.onBackToLogin({});
    };
    handleRegister = () => {
        this.setState({
            emailIsEquel: this.state.email === this.state.confEmail,
            passwordIsEquel: this.state.password === this.state.confPassword
        });

        if(this.state.emailIsEquel && this.state.passwordIsEquel) {
            console.log(this.state);
            let self = this;

            self.setState({isLoading: true});
            if (!realAuth.isAuthenticated) {
                realAuth.registration({
                    'username': self.state.username,
                    'fullname': self.state.fullname,
                    'email': self.state.email,
                    'password': self.state.password
                }).then(isAuthenticated => {
                    self.setState({
                        redirectToReferrer: isAuthenticated.status,
                        isLoading: false
                    });
                    console.log('isRegistered.status', isAuthenticated);
                    if (isAuthenticated.status) {
                        self.props.onRegister(isAuthenticated);
                    }
                }).catch(div => {
                    console.log('div::>', div);
                });
            }
        }
    };

    render() {
        const {from} = this.props.location.state || {from: {pathname: '/'}};
        const {redirectToReferrer} = this.state;

        if (this.state.isLoading){
            return (
                <div className="LoginMain">
                    <div className="loader-inner">
                        <div className="loader-line-wrap">
                            <div className="loader-line"></div>
                        </div>
                        <div className="loader-line-wrap">
                            <div className="loader-line"></div>
                        </div>
                        <div className="loader-line-wrap">
                            <div className="loader-line"></div>
                        </div>
                        <div className="loader-line-wrap">
                            <div className="loader-line"></div>
                        </div>
                        <div className="loader-line-wrap">
                            <div className="loader-line"></div>
                        </div>
                    </div>
                </div>
            )
        }
        if (redirectToReferrer && from.pathname !== '/') {
            return <Redirect to={from}/>;
        }

        return (
            <div className="RegistrationComponent">
                <Button
                    variant="raised"
                    className="buttonExit"
                    onClick={this.handleBackToLogin}>
                    Back to login
                </Button>
                <Button
                    variant="raised"
                    className="buttonRegister"
                    onClick={this.handleRegister}>
                    Sign In
                </Button>

                <div className="RegistrationTitle">
                    Registration
                </div>
                <div className="RegistrationMain">
                    <Grid >
                        <Grid container spacing={24}>
                            <Grid item xs={12} container>
                                <Grid item xs={3}>
                                    <p className="Line">Full Name:</p>
                                    <p className="Line">User Name:</p>
                                </Grid>
                                <Grid item xs={3}>
                                    <FormControl className={this.props.classes.formControl}>
                                        <InputLabel
                                            formcontrolclasses={{
                                                focused: this.props.classes.inputLabelFocused,
                                            }}
                                            htmlFor="Fullname"
                                        >
                                            <font color="#C8E6C9"> Full Name </font>
                                        </InputLabel>
                                        <Input
                                            classes={{
                                                underline: this.props.classes.inputUnderline,
                                                focused: this.props.classes.inputLabelFocused,
                                            }}
                                            id="FullName"
                                            onChange={this.handleChangeFullName}
                                        />
                                    </FormControl>

                                    <FormControl className={this.props.classes.formControl}>
                                        <InputLabel
                                            formcontrolclasses={{
                                                focused: this.props.classes.inputLabelFocused,
                                            }}
                                            htmlFor="username"
                                        >
                                            <font color="#C8E6C9"> User Name </font>
                                        </InputLabel>
                                        <Input
                                            classes={{
                                                underline: this.props.classes.inputUnderline,
                                                focused: this.props.classes.inputLabelFocused,
                                            }}
                                            id="username"
                                            onChange={this.handleChangeUsername}
                                        />
                                    </FormControl>

                                </Grid>
                                <Grid item xs={3}>
                                    <p className="Line1">Email address:</p>
                                    <p className="Line1">Confirm Email address:</p>
                                    <p className="Line1">Password:</p>
                                    <p className="Line1">Confirm Password:</p>
                                </Grid>
                                <Grid item xs={3}>
                                    <FormControl className={this.props.classes.formControl}>
                                        <InputLabel
                                            formcontrolclasses={{
                                                focused: this.props.classes.inputLabelFocused,

                                            }}
                                            htmlFor="EmailAddress"
                                        >
                                            <font color="#C8E6C9"> Email address </font>
                                        </InputLabel>
                                        <Input
                                            classes={{
                                                underline: this.props.classes.inputUnderline,
                                                focused: this.props.classes.inputLabelFocused,
                                            }}
                                            id="EmailAddress"
                                            onChange={this.handleChangeEmail}
                                        />
                                    </FormControl>

                                    <FormControl className={this.props.classes.formControl}>
                                        <InputLabel
                                            formcontrolclasses={{
                                                focused: this.props.classes.inputLabelFocused,
                                            }}
                                            htmlFor="ConfirmEmailAddress"
                                        >
                                            <font color="#C8E6C9"> Confirm Email address </font>
                                        </InputLabel>
                                        <Input
                                            classes={{
                                                underline: this.props.classes.inputUnderline,
                                                focused: this.props.classes.inputLabelFocused,
                                            }}
                                            id="ConfirmEmailAddress"
                                            onChange={this.handleChangeConfEmail}
                                        />
                                        <FormHelperText className={this.props.classes.FormHelperText}>
                                            {this.state.emailIsEquel === false ? 'Emails are not match.' : ''}
                                        </FormHelperText>
                                    </FormControl>

                                    <FormControl className={this.props.classes.formControl}>
                                        <InputLabel
                                            formcontrolclasses={{
                                                focused: this.props.classes.inputLabelFocused,

                                            }}
                                            htmlFor="Password"
                                        >
                                            <font color="#C8E6C9"> Password </font>
                                        </InputLabel>
                                        <Input
                                            type="Password"
                                            classes={{
                                                underline: this.props.classes.inputUnderline,
                                                focused: this.props.classes.inputLabelFocused,
                                            }}
                                            id="Password"
                                            onChange={this.handleChangePassword}
                                        />
                                    </FormControl>

                                    <FormControl className={this.props.classes.formControl}>
                                        <InputLabel
                                            formcontrolclasses={{
                                                focused: this.props.classes.inputLabelFocused,
                                            }}
                                            htmlFor="ConfirmPassword"
                                        >
                                            <font color="#C8E6C9"> Confirm Password </font>
                                        </InputLabel>
                                        <Input
                                            type="password"
                                            classes={{
                                                underline: this.props.classes.inputUnderline,
                                                focused: this.props.classes.inputLabelFocused,
                                            }}
                                            id="ConfirmPassword"
                                            onChange={this.handleChangeConfPassword}
                                        />
                                        <FormHelperText className={this.props.classes.FormHelperText}>
                                            {this.state.passwordIsEquel === false ? 'Passwords are not match.' : ''}
                                        </FormHelperText>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

Registration.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Registration);