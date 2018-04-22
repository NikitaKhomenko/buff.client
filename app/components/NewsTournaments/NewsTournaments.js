import React, { Component } from 'react';
import './NewsTournaments.scss'
const title = "start planing and earn coins!"
export default class NewsTournaments extends Component {
    render() {
        return (
            <div className="NewsTournamentsComponent">
                <div className="NewsTournamentsTitle">
                    {title.toLocaleUpperCase()}
                </div>
                <div className="contentTitle">
                    News and tournaments:
                </div>
                <div className="NewsTournamentsMain">

                </div>
            </div>
        );
    }
}