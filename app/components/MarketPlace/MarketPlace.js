import React, { Component } from 'react';
import './MarketPlace.scss'
const title = "start planing and earn coins!"
export default class MarketPlace extends Component {
    render() {
        return (
            <div className="MarketPlaceComponent">
                <div className="MarketPlaceTitle">
                    {title.toLocaleUpperCase()}
                </div>
                <div className="contentTitle">
                    Market place:
                </div>
                <div className="MarketPlaceMain">

                </div>
            </div>
        );
    }
}