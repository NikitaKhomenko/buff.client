import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Grid} from "material-ui";
import Table, {TableBody, TableCell, TableHead, TableRow, TablePagination} from 'material-ui/Table';
import './Leaderboard.scss'
import Button from "material-ui/es/Button/Button";


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
                                        <Button className="buttonShareEarn">
                                            <font face="verdana">
                                                Share and Earn
                                            </font>
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                <div className="LeaderboardMain">
                    <Grid container spacing={24}>
                        <Grid item xs={12} container>
                            <Grid item xs={8}>
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
                                                {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((n,k) => {
                                                    return (
                                                        <TableRow key={k}>
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
                            <Grid item xs={4}>

                                <Paper>
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
                                </Paper>

                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}