import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Grid} from 'material-ui';
import Table, {TableBody, TableCell, TableHead, TableRow, TablePagination} from 'material-ui/Table';
import './Leaderboard.scss';
import Button from 'material-ui/es/Button/Button';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as mainActions from '../../actions/mainActions';


const title = 'start playing and earn coins!';

class Leaderboard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      page: 0,
      rowsPerPage: 5,
      data: this.props.allLeaaderBoard
    };
    setInterval(() => {
      this.updateLeaders(this.props.allLeaaderBoard)
    }, 1000)
  }
  updateLeaders(leader){
    if(this.state.data !== leader) {
      this.setState({data: leader});
    }
  }
  handleChangePage = (event, page) => {
    this.setState({page});
  };


  render() {
    const {rowsPerPage, page} = this.state;
    let dataLiderboard = this.state.data;
    let emptyRows= 0
    if(dataLiderboard) {
      emptyRows = rowsPerPage - Math.min(rowsPerPage, dataLiderboard.length - page * rowsPerPage);
    }
    return (
      <div className="LeaderboardComponent">
        <Grid container spacing={24}>
          <Grid item xs={12} container>
            <Grid item xs={9}>
              <div className="LeaderboardTitle" style={{width: 300, height: 80}}>
                {title.toLocaleUpperCase()}
              </div>
              <div className="contentTitle" style={{width: 550, height: 60}}>
                You will earn more coins by marking achievement in active game
              </div>
            </Grid>
            <Grid item xs={3}>
              <h4>online users: 15,000</h4>
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
                        {dataLiderboard?dataLiderboard.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((n, k) => {
                          return (
                            <TableRow key={k}>
                              <TableCell className="tableColumn">Dota 2</TableCell>
                              <TableCell className="tableColumn">past week</TableCell>
                              <TableCell className="tableColumn">{n.publicKey.substring(0,10)}...</TableCell>
                              <TableCell className="tableColumn">{n.win}/{n.lose}</TableCell>
                              <TableCell className="tableColumn">{n.reward}</TableCell>
                            </TableRow>
                          );
                        }):<div/>}
                        {emptyRows > 0 && (
                          <TableRow style={{height: 48 * emptyRows}}>
                            <TableCell colSpan={6}/>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                    <TablePagination
                      component="div"
                      count={dataLiderboard?dataLiderboard.length:0}
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
  allLeaaderBoard: state.reducerMain.leaderBoard,
  username: state.reducerMain.username
});

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(mainActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);