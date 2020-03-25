import React, { Component } from 'react';
import './mysteries.css';
import Head from '../../assets/mount.png';
import Slaughter from '../../assets/slaughter.png';
import axios from 'axios';

export default class Mysteries extends Component {
    constructor() {
        super()
        this.state = {
            mysteries: {}
        }
    }

    componentDidMount(){
        let promise = axios.get('http://localhost:7331/api/mysteries')
        promise.then((response) => {
            this.setState({
                mysteries: response.data
            })
        })

    }

    render() {
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
                            <div>Quantity</div>
                            <div>Price</div>
                            <div>Alphabetical</div>
                        </div>
                    </div>
                    <div className="murder-mystery-grid-container">
                        <div className="individual-mystery-container">
                            <div className="mystery-logo-container">
                                <div className="mystery-logo">
                                    <img src={Head} alt="slaughter" className="mystery-head-logo" />
                                </div>
                            </div>

                            <div className="mystery-description-container">
                                <div className="mystery-title">Moorhead Mount</div>
                                <div className="mystery-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo ultrices orci, at dignissim sapien vulputate sed. Nunc quis lacus eget metus blandit commodo. Fusce vitae tempor augue, ac mollis odio. </div>
                                <div className="mystery-data-container">
                                    <div className="mystery-quantity">Quantity: 200</div>
                                    <div className="mystery-price">Price: 200</div>
                                </div>
                            </div>
                        </div>
                        <div className="individual-mystery-container">
                            <div className="mystery-logo-container">
                                <div className="mystery-logo">
                                    <img src={Slaughter} alt="slaughter" className="mystery-head-logo" />
                                </div>
                            </div>

                            <div className="mystery-description-container">
                                <div className="mystery-title">Summer Slaughter of 98</div>
                                <div className="mystery-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo ultrices orci, at dignissim sapien vulputate sed. Nunc quis lacus eget metus blandit commodo. Fusce vitae tempor augue, ac mollis odio. </div>
                                <div className="mystery-data-container">
                                    <div className="mystery-quantity">Quantity: 200</div>
                                    <div className="mystery-price">Price: 200</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    // <div className="individual-mystery-container">
    //                         <div className="mystery-logo-container">
    //                             <div className="mystery-logo">
    //                                 <img src={Head} alt="slaughter" className="mystery-head-logo" />
    //                             </div>
    //                         </div>

    //                         <div className="mystery-description-container">
    //                             <div className="mystery-title">Moorhead Mount</div>
    //                             <div className="mystery-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo ultrices orci, at dignissim sapien vulputate sed. Nunc quis lacus eget metus blandit commodo. Fusce vitae tempor augue, ac mollis odio. </div>
    //                             <div className="mystery-data-container">
    //                                 <div className="mystery-quantity">Quantity: 200</div>
    //                                 <div className="mystery-price">Price: 200</div>
    //                             </div>
    //                         </div>
    //                     </div>
}