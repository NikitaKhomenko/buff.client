import React, {Component} from 'react';
import './NewsTournaments.scss';
import Grid from 'material-ui/es/Grid/Grid';
import Paper from 'material-ui/es/Paper/Paper';
import Button from 'material-ui/es/Button/Button';
import * as mainActions from '../../actions/mainActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const title = 'start playing and earn coins!';
class NewsTournaments extends Component {
  render() {
    let news = this.props.allNews;
    let tournaments= this.props.allTournaments;
    return (
      <div className="NewsTournamentsComponent">
        <Grid container spacing={24}>
          <Grid item xs={12} container>
            <Grid item xs={10}>
              <div className="NewsTournamentsTitle" style={{width: 300, height: 80}}>
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
        <div className="NewsTournamentsMain">
          <Grid container spacing={24}>
            <Grid item xs={12} container>
              <Grid item xs={4}>
                <div className="papersMain">
                  <Paper className="myAcc" elevation={8}>
                    <div className="titleMyAcc">
                      Latest News
                    </div>
                    {news?news.slice(news.length -2,news.length).map((n, k) => {
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
                              <Button size="small" className="buttonReadMore" href ={n.link} target="_blank">
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
                  <Paper className="myAcc" elevation={8} >
                    <div className="titleMyAcc">
                      Tournaments
                    </div>
                    {tournaments?tournaments.map((n,k) =>
                      <div key={k}>
                        <div className="newsMain">
                          <div className="newsDotesContents">
                            <div className="newsDotes"/>
                          </div>
                          <div className="newsContent">
                            {n.title}
                            <div className="sectionButton">
                              <div className="newsTitle">
                                {n.date}</div>
                              <Button size="small" className="buttonReadMore" href ={n.link} target="_blank">
                                Read More
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div style={{
                          height: '1.5px',
                          borderTop: '1.5px solid #000'
                        }}/>
                      </div>
                    ):<div>In the near future there are no tournaments</div>}
                  </Paper>
                </div>
              </Grid>
              <Grid item xs={4}>

                <div className="papersMain">
                  <Paper className="myAcc" elevation={8}>
                    <div className="titleMyAcc">
                      Chat Box
                    </div>
                    <div className="balanceMyAcc">
                      <div style={{color: '#919191'}}>
                        <iframe src="https://discordapp.com/widget?id=445526398027825154&theme=dark" width="300"
                                height="350" allowtransparency="true" frameBorder="0"></iframe>
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
  allTournaments:state.reducerMain.allTournaments,
  allNews: state.reducerMain.allNews,
});

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(mainActions, dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(NewsTournaments)