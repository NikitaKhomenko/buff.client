import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import CardMedia from 'material-ui/Card/CardMedia';
import {FormControl} from 'material-ui/Form';
import Input, {InputLabel} from 'material-ui/Input';
import green from 'material-ui/colors/green';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import './Registration.scss';


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

const RegistrationContainerStyle = ({
  width: '100%',
  height: '100%',
  align: 'center'
});


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
    username: '',
    open: false,
    anchorEl: null,
    selectedIndex: 1,
  };

  handleClickListItem = event => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleMenuItemClick = (event, index) => {
    this.setState({selectedIndex: index, anchorEl: null});
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };

  handleBackToLogin = () => {
    this.props.onBackToLogin({});
  };

  render() {
    const {anchorEl} = this.state;
    return (
      <div className="RegistrationComponent">
        <Button
          variant='raised'
          className="buttonExit"
          onClick={this.handleBackToLogin}>
          Back to login
        </Button>
        <Button
          variant="raised"
          className="buttonRegister">
           Sign In
        </Button>

        <div className="RegistrationTitle">
          Registration
        </div>
        <div className="RegistrationMain">
          <CardMedia style={RegistrationContainerStyle} className="container">
            <Grid style={RegistrationContainerStyle}>
              <Grid container spacing={24}>
                <Grid item xs={12} container>
                  <Grid item xs={3}>
                    <p className="Line">User Name:</p>
                    <p className="Line">Nick Name:</p>
                    <p className="Line">First Name:</p>
                    <p className="Line">Last Name:</p>
                  </Grid>
                  <Grid item xs={3}>
                    <FormControl className={this.props.classes.formControl}>
                      <InputLabel
                        formcontrolclasses={{
                          focused: this.props.classes.inputLabelFocused,
                        }}
                        htmlFor='username'
                      >
                          <font color="#C8E6C9"> User Name </font>
                      </InputLabel>
                      <Input
                        classes={{
                          underline: this.props.classes.inputUnderline,
                          focused: this.props.classes.inputLabelFocused,
                        }}
                        id='username'
                      />
                    </FormControl>

                    <FormControl className={this.props.classes.formControl}>
                      <InputLabel
                        formcontrolclasses={{
                          focused: this.props.classes.inputLabelFocused,
                        }}
                        htmlFor='NickName'
                      >
                          <font color="#C8E6C9"> *Not necessary </font>
                      </InputLabel>
                      <Input
                        classes={{
                          underline: this.props.classes.inputUnderline,
                          focused: this.props.classes.inputLabelFocused,
                        }}
                        id='NickName'
                      />
                    </FormControl>

                    <FormControl className={this.props.classes.formControl}>
                      <InputLabel
                        formcontrolclasses={{
                          focused: this.props.classes.inputLabelFocused,
                        }}
                        htmlFor='FirstName'
                      >
                          <font color="#C8E6C9"> First Name </font>
                      </InputLabel>
                      <Input
                        classes={{
                          underline: this.props.classes.inputUnderline,
                          focused: this.props.classes.inputLabelFocused,
                        }}
                        id='FirstName'
                      />
                    </FormControl>

                    <FormControl className={this.props.classes.formControl}>
                      <InputLabel
                        formcontrolclasses={{
                          focused: this.props.classes.inputLabelFocused,
                        }}
                        htmlFor='LastName'
                      >
                          <font color="#C8E6C9"> Last Name </font>
                      </InputLabel>
                      <Input
                        classes={{
                          underline: this.props.classes.inputUnderline,
                          focused: this.props.classes.inputLabelFocused,
                        }}
                        id='LastName'
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
                        htmlFor='EmailAddress'
                      >
                          <font color="#C8E6C9"> Email address </font>
                      </InputLabel>
                      <Input
                        classes={{
                          underline: this.props.classes.inputUnderline,
                          focused: this.props.classes.inputLabelFocused,
                        }}
                        id='EmailAddress'
                      />
                    </FormControl>

                    <FormControl className={this.props.classes.formControl}>
                      <InputLabel
                        formcontrolclasses={{
                          focused: this.props.classes.inputLabelFocused,
                        }}
                        htmlFor='ConfirmEmailAddress'
                      >
                          <font color="#C8E6C9"> Confirm Email address </font>
                      </InputLabel>
                      <Input
                        classes={{
                          underline: this.props.classes.inputUnderline,
                          focused: this.props.classes.inputLabelFocused,
                        }}
                        id='ConfirmEmailAddress'
                      />
                    </FormControl>
                    <FormControl className={this.props.classes.formControl}>
                      <InputLabel
                        formcontrolclasses={{
                          focused: this.props.classes.inputLabelFocused,

                        }}
                        htmlFor='Password'
                      >
                          <font color="#C8E6C9"> Password </font>
                      </InputLabel>
                      <Input
                        type="Password"
                        classes={{
                          underline: this.props.classes.inputUnderline,
                          focused: this.props.classes.inputLabelFocused,
                        }}
                        id='Password'
                      />
                    </FormControl>

                    <FormControl className={this.props.classes.formControl}>
                      <InputLabel
                        formcontrolclasses={{
                          focused: this.props.classes.inputLabelFocused,
                        }}
                        htmlFor='ConfirmPassword'
                      >
                          <font color="#C8E6C9"> Confirm Password </font>
                      </InputLabel>
                      <Input
                        type="password"
                        classes={{
                          underline: this.props.classes.inputUnderline,
                          focused: this.props.classes.inputLabelFocused,
                        }}
                        id='ConfirmPassword'
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardMedia>
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
