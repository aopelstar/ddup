import React, { Component } from 'react';
import axios from 'axios';
import './learn.css';

export default class Learn extends Component{
    constructor(){
        super()
        this.state={
        }
    }

    componentDidMount(){
        let whatever = axios.get('http://localhost:7331/api/learn/'+this.props.match.params.id)
        whatever.then( ({ data }) => {
            this.setState({
                id: data.mystery_id,
                name: data.myster_name,
                description: data.mystery_description,
                quantity: data.mystery_quantity,
                price: data.mystery_price,
                logo: data.mystery_logo
            })
        })
    }

    render(){
        return(
            <div className="learn-component">
                <div className = "learn-container">
                    
                </div>
                
            </div>
        )
    }
}