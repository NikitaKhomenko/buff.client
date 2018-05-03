import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Grid} from "material-ui";
import Table, {TableBody, TableCell, TableHead, TableRow, TablePagination} from 'material-ui/Table';
import './Leaderboard.scss'


const title = "start playing and earn coins!"
let id = 0;

function createData(name, period, playerName, achievements, buffEarn) {
    id += 1;
    return {name, period, playerName, achievements, buffEarn};
}

const data = [
    createData('Dota 2', 'past week', 'Ron B', '10 kills', 1250),
    createData('Dota 2', 'past week', 'John K', '0 kills', 0),
    createData('CS-GO', 'past week', 'Mike R', '2 kills', 250),
];

export default class Leaderboard extends Component {
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
            <div className="LeaderboardComponent">
                <div className="LeaderboardTitle" style={{width: 300, height: 80}}>
                    {title.toLocaleUpperCase()}
                </div>
                <div className="contentTitle" style={{width: 550, height: 60}}>
                    You will earn more coins by marking achievement in active game
                </div>
                <div className="LeaderboardMain">
                    <Grid container spacing={24}>
                        <Grid item xs={12} container>
                            <div className="papersMain">
                                <Paper className="myAcc" elevation={8} >
                                    <div className="titleLeaderboard">
                                        Leaderboard
                                    </div>
                                    <Table className="tableLeaderboard">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell className="tableColumnHead">Name</TableCell>
                                                <TableCell className="tableColumnHead">Period</TableCell>
                                                <TableCell className="tableColumnHead">Player Name</TableCell>
                                                <TableCell className="tableColumnHead">Achievements</TableCell>
                                                <TableCell className="tableColumnHead">Buff Earned</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => {
                                                return (
                                                    <TableRow key={n.id}>
                                                        <TableCell className="tableColumn">{n.name}</TableCell>
                                                        <TableCell className="tableColumn">{n.period}</TableCell>
                                                        <TableCell className="tableColumn">{n.playerName}</TableCell>
                                                        <TableCell className="tableColumn">{n.achievements}</TableCell>
                                                        <TableCell className="tableColumn">{n.buffEarn}</TableCell>
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