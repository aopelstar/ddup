import React, { Component } from 'react';
import './mysteries.css';
import axios from 'axios';

export default class Mysteries extends Component {
    constructor() {
        super()
        this.state = {
            mysteries: []
        }
    }

    async componentDidMount() {
        let promise = axios.get('http://localhost:7331/api/mysteries')
        await promise.then((response) => {
            this.setState({
                mysteries: response.data,
                size: false,
                price: false,
                alpha: false
            })
        })

    }

    mysterySort(key) {
        if (key === "size") {
            let stateSize = this.state.mysteries.sort((a, b) => {
                if (a.mystery_quantity < b.mystery_quantity) {
                    return 1
                } else {
                    return -1
                }
            })
            this.setState({
                mysteries: stateSize,
                size: true,
                price: false,
                alpha: false
            })
        } else if (key === "price") {
            let price = this.state.mysteries.sort((a, b) => {
                if (a.mystery_price > b.mystery_price) {
                    return 1
                } else {
                    return -1
                }
            })
            this.setState({
                mysteries: price,
                size: false,
                price: true,
                alpha: false
            })
        } else if (key === "alpha") {
            let alphabet = this.state.mysteries.sort((a, b) => {
                if (a.mystery_name > b.mystery_name) {
                    return 1
                } else {
                    return -1
                }
            })
            this.setState({
                mysteries: alphabet,
                size: false,
                price: false,
                alpha: true
            })
        }
    }

    render() {
        let mysteries = this.state.mysteries.map((e, i) => {
            return (
                <div className="individual-mystery-container" key={i}>
                    <div className="mystery-logo-container">
                        <div className="mystery-logo">
                            <img src={e.mystery_logo} alt="slaughter" className="mystery-head-logo" />
                        </div>
                        <div className="mystery-button-container">
                            <div><button className="mystery-button">Learn More</button></div>
                            <div><button className="mystery-button">Add To Cart</button></div>
                        </div>
                    </div>
                    <div className="mystery-description-container">
                        <div className="mystery-title">{e.mystery_name}</div>
                        <div className="mystery-description">{e.mystery_description} </div>
                        <div className="mystery-data-container">
                            <div className="mystery-quantity">Party Size: {e.mystery_quantity} guests</div>
                            <div className="mystery-price">Price: ${e.mystery_price}.00</div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className="mystery-component">
                <div className="mystery-container">
                    <div className="mystery-hype-copy-container">
                        <div className="mystery-hype-title"> The party won't stop until all of your friends are dead </div>
                        <div className="mystery-hype-copy">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo ultrices orci, at dignissim sapien vulputate sed. Nunc quis lacus eget metus blandit commodo. Fusce vitae tempor augue, ac mollis odio. Mauris quis lorem tellus. Sed urna nulla, rutrum at molestie eu, eleifend sed massa. Pellentesque pharetra enim eros, in mattis nibh malesuada eu.
                        </div>
                    </div>
                    <div className="mystery-navigation-container">
                        <div className="mystery-navigation-title">
                            Sort By:
                            </div>
                        <div className="mystery-navigation">
                            <div className={this.state.size ? "nav-true" : "mystery-nav-size"} onClick={() => this.mysterySort("size")}>Party Size</div>
                            <div className={this.state.price ? "nav-true" : "mystery-nav-size"} onClick={() => this.mysterySort("price")}>Price</div>
                            <div className={this.state.alpha ? "nav-true" : "mystery-nav-size"} onClick={() => this.mysterySort("alpha")}>Alphabetical</div>
                        </div>
                    </div>
                    <div className="murder-mystery-grid-container">
                        {mysteries}
                    </div>
                </div>
            </div>
        )
    }
}