import React, { Component } from 'react';
import './Dashboard.scss'
const title = "start planing and earn coins!"
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

        </div>
      </div>
    );
  }
}