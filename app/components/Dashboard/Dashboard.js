import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import './Dashboard.scss';

const title = 'start planing and earn coins!';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboardComponent">
        <div className="dashboardTitle">
          {title.toLocaleUpperCase()}
        </div>
        <div className="contentTitle">
          You will earn more coins by marking achievement in active game
        </div>
        <div className="dashboardMain">
          <div className="papersMain">
            <Paper className="myAcc" elevation={8}>
              <div className="titleMyAcc">
                My Account
              </div>
              <div className="balanceMyAcc">
                <div style={{color: '#919191'}}>
                  Buff Balance
                </div>
                <div style={{padding: '0 10px', color: '#347139'}}>
                  20 coins
                </div>
              </div>

              <div style={{borderTop: '1px solid #131416'}}/>

              <div className="balanceMyAcc">
                <div style={{color: '#919191'}}>
                  Gold Status
                </div>
                <div style={{padding: '0 10px', color: '#347139'}}>
                  New Zealand Clan
                </div>
              </div>
            </Paper>

          </div>
          <div className="papersMain">
            <Paper className="myAcc" elevation={8}>
              <div className="titleMyAcc">
                Active Games
              </div>
              <div className="balanceMyAcc">
                <div style={{color: '#919191'}}>
                  CS:GO
                </div>

              </div>
              <div className="balanceMyAcc">
                <div style={{color: '#919191'}}>
                  Dota2
                </div>
              </div>
              <div className="balanceMyAcc">
                <div style={{color: '#919191'}}>
                  PUBG
                </div>
              </div>

            </Paper>

          </div>
        </div>
      </div>
    );
  }
}
