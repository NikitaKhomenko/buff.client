import React, {Component} from 'react';
import CardMedia from 'material-ui/Card/CardMedia';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const classes = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});
export default class LoggedIn extends Component {
  render() {
    return (
      <CardMedia className={classes.root}
                 image={'buff-client-electron/build/assets/Materials/Registration_background.jpg'}>
        <h2>Logged in as {this.props.user.username}</h2>
        <Grid container spacing={24}>
          <Grid item xs={12} container>
            <Grid item xs={12}>
              <Paper className={classes.paper}>=12</Paper>
            </Grid>
            <Grid item xs={9}><Paper className={classes.paper}>6</Paper></Grid>
            <Grid item xs={3}><Paper className={classes.paper}>3</Paper></Grid>
          </Grid>
        </Grid>
      </CardMedia>
    );
  }
}

