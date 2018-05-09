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
      rowsPerPage: 4,
      data: this.props.allHistory
    };
  }

  handleChangePage = (event, page) => {
    this.setState({page});
  };

  handleChangeRowsPerPage = event => {
    this.setState({rowsPerPage: event.target.value});
  };

  render() {
    const {rowsPerPage, page} = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, this.state.data.length - page * rowsPerPage);
    return (
      <div className="HistoryComponent">
        <Grid container spacing={24}>
          <Grid item xs={12} container>
            <Grid item xs={9}>
              <div className="HistoryTitle" style={{width: 300, height: 80}}>
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
                          <TableCell className="tableColumnHead">Achievements</TableCell>
                          <TableCell className="tableColumnHead">Buff Coins</TableCell>
                          <TableCell className="tableColumnHead">Conversion</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {this.state.data.map((n, k) => {
                          console.log('DAATA:::::>',n ,k);
                          return (
                            <TableRow key={k}>
                              <TableCell className="tableColumn">{n.date}</TableCell>
                              <TableCell className="tableColumn">{n.gameConversion}</TableCell>
                              <TableCell className="tableColumn">{n.achievements}</TableCell>
                              <TableCell className="tableColumn">{n.buffCoins}</TableCell>
                              <TableCell className="tableColumn">{n.conversion}</TableCell>
                            </TableRow>
                          );
                        })}
                        {emptyRows > 0 && (
                          <TableRow style={{height: 48 * emptyRows}}>
                            <TableCell colSpan={6}/>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                    <TablePagination
                      component="div"
                      count={this.state.data.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      backIconButtonProps={{
                        'aria-label': 'Previous Page',
                      }}
                      nextIconButtonProps={{
                        'aria-label': 'Next Page',
                      }}
                      onChangePage={this.handleChangePage}
                      onChangeRowsPerPage={this.handleChangeRowsPerPage}
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
                        lorem ipsum
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
  allHistory:state.reducerMain.allHistory,
  username:state.reducerMain.username
});

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(mainActions, dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(History)