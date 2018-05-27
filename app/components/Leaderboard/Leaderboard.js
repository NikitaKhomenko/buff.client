import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {AppBar, Grid, Tab, Tabs, Typography} from 'material-ui';
import Table, {TableBody, TableCell, TableHead, TableRow, TablePagination} from 'material-ui/Table';
import './Leaderboard.scss';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as mainActions from '../../actions/mainActions';
import ReactTooltip from 'react-tooltip'
import SwipeableViews from 'react-swipeable-views';


const title = 'start playing and earn coins!';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir}>
      {children}
    </Typography>
  );
}


class Leaderboard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: 0,
      page: 0,
      rowsPerPage: 3,
      data: this.props.allLeaaderBoard
    };
    setInterval(() => {
      this.updateLeaders(this.props.allLeaaderBoard, 'DOTA');
      this.updateLeaders(this.props.allLeaaderBoardLol, 'LOL');
    }, 1000);
  }

  updateLeaders(leader,game) {
    if(game ==='DOTA'){
      if (this.state.data !== leader) {
        this.setState({data: leader});
      }
    }
    else {
      if (this.state.data !== leader) {
        this.setState({dataLoL: leader});
      }
    }

  }

  handleChangePage = (event, page) => {
    this.setState({page});
  };
  handleOpenKey = event => {
    this.setState({anchorEl: event.currentTarget});
  };
  handleClose = () => {
    this.setState({anchorEl: null});
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    let onlineUser = this.props.online;
    const {rowsPerPage, page} = this.state;
    let dataLiderboard = this.state.data;
    let dataLiderboardLoL = this.state.dataLoL;
    let emptyRows = 0;
    let emptyRowsLoL = 0;
    if (dataLiderboardLoL) {
      emptyRowsLoL = rowsPerPage - Math.min(rowsPerPage, dataLiderboardLoL.length - page * rowsPerPage);
    }
    if (dataLiderboard) {
      emptyRows = rowsPerPage - Math.min(rowsPerPage, dataLiderboard.length - page * rowsPerPage);
    }
    const {theme } = this.props;

    return (
      <div className="LeaderboardComponent">
        <Grid container spacing={24}>
          <Grid item xs={12} container>
            <Grid item xs={10}>
              <div className="LeaderboardTitle" style={{width: 300, height: 80}}>
                {title.toLocaleUpperCase()}
              </div>
              <div className="contentTitle" style={{width: 550, height: 60}}>
                You will earn more coins by marking achievement in active game
              </div>
            </Grid>
            <Grid item xs={2}>
              <h4>online users: {onlineUser?onlineUser:0}</h4>
              {/*<Button className="buttonShareEarn">*/}
              {/*<font face="verdana">*/}
              {/*Share and Earn*/}
              {/*</font>*/}
              {/*</Button>*/}
            </Grid>
          </Grid>
        </Grid>
        <div className="LeaderboardMain">
          <Grid container spacing={24}>
            <Grid item xs={12} container>
              <Grid item xs={8}>
                <div className="papersMain">
                  <Paper className="myAcc" elevation={8}>
                    <div className="titleLeaderboard">
                     Leaderboard
                    </div>
                    <AppBar position="static" className="mainLeaderboard">
                      <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        fullWidth
                      >
                        <Tab style={{fontWeight: "bold",color:"#347139"}} label="Dota 2" />
                        <Tab  style={{fontWeight: "bold",color:"#347139"}} label="League of legends" />
                      </Tabs>
                    </AppBar>
                    <SwipeableViews
                      index={this.state.value}
                      onChangeIndex={this.handleChangeIndex}
                    >
                      <TabContainer >
                        <Table className="tableLeaderboard">
                          <TableHead>
                            <TableRow>
                              <TableCell className="tableColumnHead">Name</TableCell>
                              <TableCell className="tableColumnHead">Period</TableCell>
                              <TableCell className="tableColumnHead">Public key</TableCell>
                              <TableCell className="tableColumnHead">Win / Lose</TableCell>
                              <TableCell className="tableColumnHead">Buff Earned</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {dataLiderboard ? dataLiderboard.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((n, k) => {
                              return (
                                <TableRow key={k}>
                                  <TableCell className="tableColumn">Dota 2</TableCell>
                                  <TableCell className="tableColumn">past week</TableCell>
                                  <TableCell className="tableColumn" onClick={this.handleOpenKey}>
                                    <div data-tip={n.publicKey} >{n.publicKey.substring(0, 10)}...
                                    </div>
                                    <ReactTooltip effect="solid" type="light"/>
                                  </TableCell>
                                  <TableCell className="tableColumn">{n.win}/{n.lose}</TableCell>
                                  <TableCell className="tableColumn">{n.reward}</TableCell>
                                </TableRow >
                              );
                            }) : <TableRow/>}
                            {emptyRows > 0 && (
                              <TableRow style={{height: 48 * emptyRows}}>
                                <TableCell colSpan={6}/>
                              </TableRow>
                            )}
                          </TableBody>
                        </Table>
                        <TablePagination
                          component="div"
                          count={dataLiderboard ? dataLiderboard.length : 0}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          backIconButtonProps={{
                            'aria-label': 'Previous Page',
                          }}
                          nextIconButtonProps={{
                            'aria-label': 'Next Page',
                          }}
                          onChangePage={this.handleChangePage}
                        />
                      </TabContainer>
                      <TabContainer>
                        <Table className="tableLeaderboard">
                        <TableHead>
                          <TableRow>
                            <TableCell className="tableColumnHead">Name</TableCell>
                            <TableCell className="tableColumnHead">Period</TableCell>
                            <TableCell className="tableColumnHead">Public key</TableCell>
                            <TableCell className="tableColumnHead">Win / Lose</TableCell>
                            <TableCell className="tableColumnHead">Buff Earned</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {dataLiderboardLoL ? dataLiderboardLoL.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((n, k) => {
                            return (
                              <TableRow key={k}>
                                <TableCell className="tableColumn">League of Legands</TableCell>
                                <TableCell className="tableColumn">past week</TableCell>
                                <TableCell className="tableColumn" onClick={this.handleOpenKey}>
                                  <div data-tip={n.publicKey} >{n.publicKey.substring(0, 10)}...
                                  </div>
                                  <ReactTooltip effect="solid" type="light"/>
                                </TableCell>
                                <TableCell className="tableColumn">{n.win}/{n.lose}</TableCell>
                                <TableCell className="tableColumn">{n.reward}</TableCell>
                              </TableRow >
                            );
                          }) : <TableRow/>}
                          {emptyRowsLoL > 0 && (
                            <TableRow style={{height: 48 * emptyRowsLoL}}>
                              <TableCell colSpan={6}/>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                        <TablePagination
                          component="div"
                          count={dataLiderboardLoL ? dataLiderboardLoL.length : 0}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          backIconButtonProps={{
                            'aria-label': 'Previous Page',
                          }}
                          nextIconButtonProps={{
                            'aria-label': 'Next Page',
                          }}
                          onChangePage={this.handleChangePage}
                        />
                      </TabContainer>
                    </SwipeableViews>
                  </Paper>

                </div>
              </Grid>
              <Grid item xs={4}>

                <div className="papersMain">

                  <Paper className="myAcc" elevation={8} style={{width: 370, height: 310}}>
                    <div className="titleMyAcc">
                      Chat Box
                    </div>
                    <div className="balanceMyAcc">
                      <div style={{color: '#919191'}}>
                        <iframe src="https://discordapp.com/widget?id=445526398027825154&theme=dark" width="300"
                                height="350" allowtransparency="true" frameBorder="0"></iframe>
                      </div>
                    </div>
                  </Paper>
                </div>

              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allLeaaderBoard: state.reducerMain.leaderBoardDota,
  allLeaaderBoardLol: state.reducerMain.leaderBoardLol,
  username: state.reducerMain.username,
  online: state.reducerMain.onlineUsers,
});

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(mainActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);