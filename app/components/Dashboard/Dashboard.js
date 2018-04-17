import React, {Component} from 'react';
import {AppBar, Button, IconButton, Toolbar, Typography} from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Switch from 'material-ui/Switch';
import Menu, {MenuItem} from 'material-ui/Menu';
import './Dashboard.scss';
import {Link} from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

export default class Dashboard extends Component {
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
        <div key="background" className="dashboardBG">
        </div>,
        <div key="main" className="dashboardMain">
          <AppBar position="static" style={{background: 'none'}}>
            <Toolbar>
              <IconButton color="inherit" aria-label="Menu">
                <MenuIcon/>
              </IconButton>
              <Typography variant="title" color="#fff">
                BUFF
              </Typography>
              <Link to={`/dashboard`}> <Button>Dashboard</Button></Link>
              <Link to={`/history`}> <Button>History</Button></Link>
              <Link to={`/leaderboared`}> <Button>Leaderboared</Button></Link>
              <Link to={`/market_place`}> <Button>Market place</Button></Link>
              <Link to={`/news_tournaments`}> <Button>News and Tournaments</Button></Link>
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

          <div>
            <h2 style={{color: '#FFF'}}>Hello </h2>
          </div>

        </div>

      ]

    );
  }
}

