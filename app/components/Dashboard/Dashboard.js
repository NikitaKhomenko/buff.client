import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import './Dashboard.scss';
import {Grid} from 'material-ui';
import Button from 'material-ui/es/Button/Button';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as mainActions from '../../actions/mainActions';

const title = 'start playing and earn coins!';

class Dashboard extends Component {


  render() {
    let news = this.props.allNews;
    console.log('allNewsallNew', news);
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
              <h4>online users: 15,000</h4>
              {/*<Button className="buttonShareEarn">*/}
              {/*<font face="verdana">*/}
              {/*Share and Earn*/}
              {/*</font>*/}
              {/*</Button>*/}
            </Grid>
          </Grid>
        </Grid>
        <div className="dashboardMain">
          <Grid container spacing={24}>
            <Grid item xs={12} container>
              <Grid item xs={4}>

                <div className="papersMain">
                  <Paper className="myAcc" elevation={8} style={{width: 370, height: 100}}>
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
                        Status:
                      </div>
                      <div style={{padding: '0 10px', color: '#347139'}}>
                        Silver
                      </div>
                    </div>
                  </Paper>
                </div>

                <div className="papersMain">
                  <Paper className="myAcc" elevation={8} style={{width: 370}}>
                    <div className="titleMyAcc">
                      Active Games
                    </div>
                    <div className="balanceMyAcc">
                      <div style={{color: '#919191'}}>
                        League of Legands
                      </div>

                    </div>
                    <div className="balanceMyAcc">
                      <div style={{color: '#919191'}}>
                        Dota 2
                      </div>
                    </div>

                  </Paper>

                </div>
              </Grid>

              <Grid item xs={4}>
                <div className="papersMain">

                  <Paper className="myAcc" elevation={8} style={{width: 370}}>
                    <div className="titleMyAcc">
                      News
                    </div>
                    {news?news.map((n, k) => {
                      return <div key={k}>
                        <div className="newsMain">
                          <div className="newsDotesContents">
                            <div className="newsDotes"/>
                          </div>
                          <div className="newsContent">
                            {n.title}
                            <div className="sectionButton">
                              <div className="newsTitle">
                                {n.date}</div>
                              <Button size="small" className="buttonReadMore">
                                Read More
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div style={{
                          height: '1.5px',
                          borderTop: '1.5px solid #000'
                        }}/>
                      </div>;
                    }):<div/>  }
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
  allNews: state.reducerMain.allNews,
});

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(mainActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
