import React, {Component} from 'react';
import {AppBar, Button, IconButton, Toolbar, Typography} from 'material-ui';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Menu, {MenuItem} from 'material-ui/Menu';
import './ApBarDashboard.scss';
import {Link} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';

export default class ApBarDashboard extends Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({auth: checked});
  };

  handleMenu = event => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };

  render() {
    const {auth, anchorEl} = this.state;
    const open = Boolean(anchorEl);

    return (
      [
        <div key="background" className="appBarDashboardBG">
        </div>,
        <div key="main" className="appBarDashboardMain">
          <AppBar position="static" style={{background: 'none'}}>
            <Toolbar>
              <Typography variant="title">
                <div className="logo"></div>
              </Typography>
               <Button className="buttonAppBar" >Dashboard</Button>
             <Button  className="buttonAppBar">History</Button>
              <Button  className="buttonAppBar">Leaderboared</Button>
            <Button  className="buttonAppBar">Market place</Button>
           <Button  className="buttonAppBar">News and Tournaments</Button>
              {/*<Link to={`/news_tournaments`}> <Button  className="buttonAppBar">News and Tournaments</Button></Link>*/}
              {auth && (
                <div>
                  <IconButton
                    aria-owns={open ? 'menu-appbar' : null}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                  >
                    <AccountCircle/>
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                  >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                  </Menu>
                </div>
              )}
            </Toolbar>
          </AppBar>
          <Dashboard/>
        </div>

      ]

    );
  }
}

