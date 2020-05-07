import React, { Component } from 'react';
import axios from 'axios';
import './learn.css';

export default class Learn extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    async componentDidMount() {
        let whatever = axios.get('http://localhost:7331/api/learn/' + this.props.match.params.id)
        await whatever.then(({ data }) => {
            this.setState({
                id: data.mystery_id,
                name: data.mystery_name,
                description: data.mystery_description,
                quantity: data.mystery_quantity,
                price: data.mystery_price,
                logo: data.mystery_logo,
                setting: data.mystery_theme
            })
        })
    }

    render() {
        return (
            <div className="learn-component">
                <div className="learn-container">
                    <div className="learn-head-container">
                        <div className="learn-logo">
                            <img src={this.state.logo} alt="death" className="death-icon" />
                        </div>
                        <div className="learn-title">
                            {this.state.name}
                        </div>
                    </div>
                    <div className="learn-description-container">
                        <div className="learn-description">
                            {this.state.description}
                        </div>
                        <div className="learn-information">
                            <div>Party Size: <div className="learn-data">{this.state.quantity}</div></div>
                            <div>Price: <div className="learn-data">{this.state.price}</div></div>
                            <div>Theme: <div className="learn-data">{this.state.setting}</div></div>
                        </div>
                        <div className="learn-button-container">
                            <button className="learn-button">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}