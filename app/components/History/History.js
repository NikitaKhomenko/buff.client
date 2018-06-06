import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Grid} from 'material-ui';
import Button from 'material-ui/Button';
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';
import './History.scss';
import TablePagination from 'material-ui/es/Table/TablePagination';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as mainActions from '../../actions/mainActions';

const title = 'start playing and earn coins!';

class History extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      page: 0,
      rowsPerPage: 5,
      data: this.props.allHistory
    };
    setInterval(() => {
      this.updateHistory(this.props.allHistory)
    }, 1000)
  }

  updateHistory(history){
    if(this.state.data !== history) {
      this.setState({data: history});
    }
  }

  handleChangePage = (event, page) => {
    this.setState({page});
  };
  getGameName(name){
    if(name === 7314)
      name = 'Dota 2'
    else if (name === 5426)
      name = 'League of Legends'
    else name = 'undefined'
    return name
  }
  getDate(d) {
    let realDate = new Date(d);
    let h = this.addZero( realDate.getHours());
    let m = this.addZero(realDate.getMinutes());
    let date = realDate.getFullYear() + '-'
      + (realDate.getMonth() + 1) + '-'
      + realDate.getDate() + ' '
      + h + ':'
      + m;
    return date
  }
  addZero = (i) => {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  };

  render() {
    let onlineUser = this.props.online;
    const {rowsPerPage, page} = this.state;
    let dataHistory = this.state.data;
    let emptyRows= 0;
    let tableRowsHistory = this.getDataRowsHistory(dataHistory, page, rowsPerPage, emptyRows)
    return (
      <div className="HistoryComponent">
        <Grid container spacing={24}>
          <Grid item xs={12} container>
            <Grid item xs={10}>
              <div className="HistoryTitle" style={{width: 300, height: 80}}>
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
        <div className="HistoryMain">
          <Grid container spacing={24}>
            <Grid item xs={12} container>
              <Grid item xs={8}>
                <div className="papersMain">
                  <Paper className="myAcc" elevation={8}>
                    <div className="titleHistory">
                      History
                    </div>
                    <Table className="tableHistory">
                      <TableHead>
                        <TableRow>
                          <TableCell className="tableColumnHead">Date&Time</TableCell>
                          <TableCell className="tableColumnHead">Game\Conversion</TableCell>
                          <TableCell className="tableColumnHead">KDA</TableCell>
                          <TableCell className="tableColumnHead">Status</TableCell>
                          <TableCell className="tableColumnHead">Buff Coins</TableCell>
                          <TableCell className="tableColumnHead">Conversion</TableCell>
                        </TableRow>
                      </TableHead>

                      {tableRowsHistory}

                    </Table>
                    <TablePagination
                      component="div"
                      count={dataHistory?dataHistory.length:0}
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
                        <iframe src="https://discordapp.com/widget?id=442965268386283521&theme=dark" width="300"
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

  getDataRowsHistory(dataHistory, page, rowsPerPage, emptyRows) {
    if(dataHistory) {
      emptyRows = rowsPerPage - Math.min(rowsPerPage, dataHistory.length - page * rowsPerPage);
    }
    return (
      <TableBody>
      {dataHistory?dataHistory.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((n, k) => {
        let realTime = this.getDate(n.gamedata.timestamp);
        let gameName = this.getGameName(n.gamedata.gameId);

        return (
          <TableRow key={k}>
            <TableCell className="tableColumn">{realTime }</TableCell>
            <TableCell className="tableColumn">{gameName}</TableCell>
            <TableCell className="tableColumn">{n.gamedata.kda ? n.gamedata.kda.toFixed(2) : '-'}</TableCell>
            <TableCell className="tableColumn">{n.status}</TableCell>
            <TableCell className="tableColumn">{n.status == 'finished' && n.gamedata.reward ? (n.gamedata.reward/10).toFixed(2)  : '-'}</TableCell>
            <TableCell className="tableColumn">{n.status == 'finished' && n.gamedata.reward ? (n.gamedata.reward/20).toFixed(2) + '$' : '-'}</TableCell>
          </TableRow>
        );
      }):<TableRow/>}
      {emptyRows > 0 && (
        <TableRow style={{height: 48 * emptyRows}}>
          <TableCell colSpan={6}/>
        </TableRow>
      )}
    </TableBody>);
  }
}
const mapStateToProps = (state) => ({
  allHistory:state.reducerMain.allHistory,
  username:state.reducerMain.username,
  online: state.reducerMain.onlineUsers,
});

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(mainActions, dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(History)