import React, { Component } from 'react';
import './Leaderboard.scss'
const title = "start planing and earn coins!"
export default class Leaderboard extends Component {
    render() {
        return (
            <div className="LeaderboardComponent">
                <div className="LeaderboardTitle">
                    {title.toLocaleUpperCase()}
                </div>
                <div className="contentTitle">
                    Leaderboard:
                </div>
                <div className="LeaderboardMain">

                </div>
            </div>
        );
    }
}