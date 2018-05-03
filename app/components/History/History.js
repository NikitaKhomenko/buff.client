import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Grid} from "material-ui";
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';
import './History.scss';
import TablePagination from "material-ui/es/Table/TablePagination";

const title = 'start playing and earn coins!';
let id = 0;

function createData(date, game, achievement, buffCoins, conversion) {
  id += 1;
  return {date, game, achievement, buffCoins, conversion};
}

const data = [
  createData('12.7.17 | 8:02', 'League of Legends', '3 kills', 6, ''),
  createData('1.7.17 | 11:02', 'League of Legends', 'First Blood', 1, ''),
  createData('22.22.22 | 7:02', 'Conversion', '', 5, '7$'),
  createData('3.6.17 | 22:23', 'Conversion', '', 10, '10$'),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
export default class History extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            page: 0,
            rowsPerPage: 4,
            data : data
        };
    }
    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
    };
  render() {
      const { rowsPerPage, page } = this.state;
      const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
      return (
        <div className="HistoryComponent">
          <div className="HistoryTitle" style={{width: 300, height: 80}}>
            {title.toLocaleUpperCase()}
          </div>
          <div className="contentTitle" style={{width: 550, height: 60}}>
            You will earn more coins by marking achievement in active game
          </div>
          <div className="HistoryMain">
            <Grid container spacing={24}>
              <Grid item xs={12} container>
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
                          <TableCell className="tableColumnHead">Achivements</TableCell>
                          <TableCell className="tableColumnHead">Buff Coins</TableCell>
                          <TableCell className="tableColumnHead">Conversion</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => {
                          return (
                            <TableRow key={n.id}>
                              <TableCell className="tableColumn">{n.date}</TableCell>
                              <TableCell className="tableColumn">{n.game}</TableCell>
                              <TableCell className="tableColumn">{n.achievement}</TableCell>
                              <TableCell className="tableColumn">{n.buffCoins}</TableCell>
                              <TableCell className="tableColumn">{n.conversion}</TableCell>
                            </TableRow>
                          );
                        })}
                          {emptyRows > 0 && (
                              <TableRow style={{ height: 48 * emptyRows }}>
                                  <TableCell colSpan={6} />
                              </TableRow>
                          )}
                      </TableBody>
                    </Table>
                      <TablePagination
                          component="div"
                          count={data.length}
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
            </Grid>
          </div>
        </div>
    );
  }
}