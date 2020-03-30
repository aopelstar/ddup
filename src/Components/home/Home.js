import React, { Component } from 'react';
import './home.css';
import Death from '../../assets/Death-Digital.png';
import logo from '../../assets/logo-red.png'


export default class Home extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className="home-component">
                <div className="home-container">
                    <div className="home-image-container">
                    <img src={ logo } alt ="death" className="home-logo-icon"/>
                    </div>
                    <div className="home-info-container">
                    <img src={ Death } alt ="death" className="death-icon"/>
                    </div>
                </div>
                   
            </div>
        )
    }
}