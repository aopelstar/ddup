import React, { Component } from 'react';
import './menu.css';
import scythe from '../../assets/scythe.png';
import { Link } from 'react-router-dom';


export default class Menu extends Component {
    constructor() {
        super()
        this.state = {
            scytheClick: false
        }
    }

    displayChange(){
        this.setState({
            scytheClick: !this.state.scytheClick 
        })
    }

    render() {
        return (
            <div className="menu-component">
                <div className="menu-container">
                    <div className="menu-scythe-container">
                        <img src ={ scythe} alt ="scythe" className="scythe-icon" onClick={() => this.displayChange()}/>
                    </div>
                    <div className={this.state.scytheClick?"menu-select-container":"menu-select-container menu-select-container-hidden"}>

                        <div className="menu-container-left">
                            <div onClick = {() => this.displayChange()}><Link to  = '/'>Home</Link></div>
                            <div onClick = {() => this.displayChange()}><Link to = '/about'>About</Link></div>
                            <div onClick = {() => this.displayChange()}><Link to = '/mysteries'>Murder Mysteries</Link></div>
                            <div onClick = {() => this.displayChange()}><Link to = '/ded'>ded.</Link></div>
                        </div>
                        <div className="menu-container-right">
                            <div onClick = {() => this.displayChange()}><Link to = '/login'>Login</Link></div>
                            <div onClick = {() => this.displayChange()}><Link to = '/account'>Account</Link></div>
                            <div onClick = {() => this.displayChange()}><Link to = '/contact'>Contact Us</Link></div>
                            <div onClick = {() => this.displayChange()}><Link to = 'faq'>FAQ</Link></div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}