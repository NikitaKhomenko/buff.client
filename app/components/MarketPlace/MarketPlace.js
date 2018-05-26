import React, {Component} from 'react';
import './MarketPlace.scss';
import Grid from 'material-ui/es/Grid/Grid';
import Paper from 'material-ui/es/Paper/Paper';
import Button from 'material-ui/es/Button/Button';
import {bindActionCreators} from 'redux';
import * as mainActions from '../../actions/mainActions';
import {connect} from 'react-redux';

const title = 'start playing and earn coins!';

class MarketPlace extends Component {
  render() {
    let onlineUser = this.props.online;
    let userBalance = this.props.userBalance;
    return (
      <div className="dashboardComponent">
        <Grid container spacing={24}>
          <Grid item xs={12} container>
            <Grid item xs={10}>
              <div className="dashboardTitle" style={{width: 300, height: 80}}>
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
        <div className="dashboardMain">
          {/*<Grid container spacing={24}>*/}
            {/*<Grid item xs={12} container>*/}
              <div className="comingSoon" />
              {/*<Grid item xs={4}>*/}

                {/*<div className="papersMain">*/}
                  {/*<Paper className="myAcc" elevation={8} style={{width: 370, height: 100}}>*/}
                    {/*<div className="titleMyAcc">*/}
                      {/*My Account*/}
                    {/*</div>*/}
                    {/*<div className="balanceMyAcc">*/}
                      {/*<div style={{color: '#919191'}}>*/}
                        {/*Buff Balance*/}
                      {/*</div>*/}
                      {/*<div style={{padding: '0 10px', color: '#347139'}}>*/}
                        {/*{userBalance?userBalance:0}*/}
                      {/*</div>*/}
                    {/*</div>*/}

                    {/*<div style={{borderTop: '1px solid #131416'}}/>*/}

                    {/*<div className="balanceMyAcc">*/}
                      {/*<div style={{color: '#919191'}}>*/}
                        {/*Status:*/}
                      {/*</div>*/}
                      {/*<div style={{padding: '0 10px', color: '#347139'}}>*/}
                        {/*Silver*/}
                      {/*</div>*/}
                    {/*</div>*/}
                  {/*</Paper>*/}
                {/*</div>*/}
              {/*</Grid>*/}
              {/*<Grid item xs={4}/>*/}
              {/*<Grid item xs={4}>*/}
                {/*<div className="papersMain">*/}
                  {/*<Paper className="myAcc" elevation={8} style={{width: 370, height: 310}}>*/}
                    {/*<div className="titleMyAcc">*/}
                      {/*Chat Box*/}
                    {/*</div>*/}
                    {/*<div className="balanceMyAcc">*/}
                      {/*<div style={{color: '#919191'}}>*/}
                        {/*<iframe src="https://discordapp.com/widget?id=445526398027825154&theme=dark" width="300"*/}
                                {/*height="350" allowtransparency="true" frameBorder="0"></iframe>*/}
                      {/*</div>*/}
                    {/*</div>*/}
                  {/*</Paper>*/}
                {/*</div>*/}
              {/*</Grid>*/}
            {/*</Grid>*/}
          {/*</Grid>*/}

        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  online: state.reducerMain.onlineUsers,
  userBalance: state.reducerMain.userBalance,
});

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(mainActions, dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MarketPlace)