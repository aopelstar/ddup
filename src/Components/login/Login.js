import React, { Component } from 'react';
import './login.css';

export default class Login extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div className="login-component">
                <div className="login-container">
                    <div className="login-title">
                        Login
                    </div>
                    <div className="login-fields">
                        <div><input/></div>
                        <div><input/></div>
                    </div>
                </div>
            </div>
        )
    }
}