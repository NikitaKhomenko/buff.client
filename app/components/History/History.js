import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Grid} from "material-ui";
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';
import './History.scss';

const title = 'start planing and earn coins!';
let id = 0;

function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return {id, name, calories, fat, carbs, protein};
}

const data = [
  createData('12.7.17 | 8:02', 'League of Legends', '3 kills', 6, ''),
  createData('1.7.17 | 11:02', 'League of Legends', 'First Blood', 1, ''),
  createData('22.22.22 | 7:02', 'Conversion', '', 5, '7$'),
  createData('3.6.17 | 22:23', 'Conversion', '', 10, '10$'),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
export default class History extends Component {
  render() {
    return (
      <div className="HistoryComponent">
        <div className="HistoryTitle" style={{width: 300, height: 100}}>
          {title.toLocaleUpperCase()}
        </div>
        <div className="contentTitle" style={{width: 550, height: 80}}>
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
                      {data.map(n => {
                        return (
                          <TableRow key={n.id}>
                            <TableCell className="tableColumn">{n.name}</TableCell>
                            <TableCell className="tableColumn">{n.calories}</TableCell>
                            <TableCell className="tableColumn">{n.fat}</TableCell>
                            <TableCell className="tableColumn">{n.carbs}</TableCell>
                            <TableCell className="tableColumn">{n.protein}</TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </Paper>

              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}