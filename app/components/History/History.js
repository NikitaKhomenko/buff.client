import React, { Component } from 'react';
import './History.scss'
const title = "start planing and earn coins!"
export default class History extends Component {
    render() {
        return (
            <div className="HistoryComponent">
                <div className="HistoryTitle">
                    {title.toLocaleUpperCase()}
                </div>
                <div className="contentTitle">
                    You're game and earning history:
                </div>
                <div className="HistoryMain">

                </div>
            </div>
        );
    }
}