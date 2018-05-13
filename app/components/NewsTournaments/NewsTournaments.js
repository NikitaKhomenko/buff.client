import React, {Component} from 'react';
import './NewsTournaments.scss';
import Grid from 'material-ui/es/Grid/Grid';
import Paper from 'material-ui/es/Paper/Paper';
import Button from 'material-ui/es/Button/Button';

const title = 'start playing and earn coins!';
export default class NewsTournaments extends Component {
  render() {
    return (
      <div className="NewsTournamentsComponent">
        <Grid container spacing={24}>
          <Grid item xs={12} container>
            <Grid item xs={9}>
              <div className="NewsTournamentsTitle" style={{width: 300, height: 80}}>
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
        <div className="NewsTournamentsMain">
          <Grid container spacing={24}>
            <Grid item xs={12} container>
              <Grid item xs={8}>
                <div className="papersMain">
                  <Paper className="myAcc" elevation={8} style={{width: 700, height: 90}}>
                    <div className="titleMyAcc">
                      Latest News
                    </div>
                    <div className="balanceMyAcc">
                      <div style={{color: '#919191'}}>
                        New version! -build your clan...
                      </div>
                    </div>
                  </Paper>
                </div>
                <div className="papersMain">
                  <Paper className="myAcc" elevation={8} style={{width: 700, height: 210}}>
                    <div className="titleMyAcc">
                      Tournaments
                    </div>
                    <div className="balanceMyAcc">
                      <div style={{color: '#919191'}}>
                        Dota 2 face off -weekly- open for all.
                      </div>
                    </div>
                    <div className="balanceMyAcc">
                      <div style={{color: '#919191'}}>
                        Clan war....
                      </div>
                    </div>
                    <div className="balanceMyAcc">
                      <div style={{color: '#919191'}}>
                        Australian open...
                      </div>
                    </div>
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