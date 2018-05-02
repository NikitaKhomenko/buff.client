import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Grid} from "material-ui";
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';
import './History.scss';
import {connect} from 'react-redux'
const title = 'start planing and earn coins!';

class History extends Component {
  render() {
    console.log("HISTORY:::::",this.props.allHistory);
    return (
      <div className="HistoryComponent">
        <div className="HistoryTitle" style={{width: 300, height: 100}}>
          {title.toLocaleUpperCase()}
        </div>
        <div className="contentTitle" style={{width: 550, height: 80}}>
          You will earn more coins by marking achievement in active game
        </div>
        {/*<div className="HistoryMain">*/}
          {/*<Grid container spacing={24}>*/}
            {/*<Grid item xs={12} container>*/}
              {/*<div className="papersMain">*/}
                {/*<Paper className="myAcc" elevation={8}>*/}
                  {/*<div className="titleHistory">*/}
                    {/*History*/}
                  {/*</div>*/}
                  {/*<Table className="tableHistory">*/}
                    {/*<TableHead>*/}
                      {/*<TableRow>*/}
                        {/*<TableCell className="tableColumnHead">Date&Time</TableCell>*/}
                        {/*<TableCell className="tableColumnHead">Game\Conversion</TableCell>*/}
                        {/*<TableCell className="tableColumnHead">Achievements</TableCell>*/}
                        {/*<TableCell className="tableColumnHead">Buff Coins</TableCell>*/}
                        {/*<TableCell className="tableColumnHead">Conversion</TableCell>*/}
                      {/*</TableRow>*/}
                    {/*</TableHead>*/}
                    {/*<TableBody>*/}
                      {/*{data.map(n => {*/}
                        {/*return (*/}
                          {/*<TableRow key={n.id}>*/}
                            {/*<TableCell className="tableColumn">{n.name}</TableCell>*/}
                            {/*<TableCell className="tableColumn">{n.calories}</TableCell>*/}
                            {/*<TableCell className="tableColumn">{n.fat}</TableCell>*/}
                            {/*<TableCell className="tableColumn">{n.carbs}</TableCell>*/}
                            {/*<TableCell className="tableColumn">{n.protein}</TableCell>*/}
                          {/*</TableRow>*/}
                        {/*);*/}
                      {/*})}*/}
                    {/*</TableBody>*/}
                  {/*</Table>*/}
                {/*</Paper>*/}

              {/*</div>*/}
            {/*</Grid>*/}
          {/*</Grid>*/}
        {/*</div>*/}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allHistory: state.allHistory,
});
export default connect(mapStateToProps)(History)