import React, { Component } from 'react';
import './about.css';

export default class About extends Component {
    constructor() {
        super()
        this.state={

        }
    }

    render(){
        return (
            <div className = "about-component">
                <div className = "about-brand-video-container">
                <iframe src="https://www.youtube.com/embed/nBJ1BSbl3SU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className = "about-mission-container">
                    <h2 className = "about-title">Welcome, ya bitch</h2>
                    <div className =" about-copy">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Orci ac auctor augue mauris augue neque gravida. Vitae congue eu consequat ac felis donec et odio pellentesque. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Leo a diam sollicitudin tempor id eu nisl nunc mi. Ornare lectus sit amet est placerat in egestas erat. Sed id semper risus in hendrerit gravida rutrum quisque. Purus non enim praesent elementum facilisis leo. Aliquam id diam maecenas ultricies mi eget. Et pharetra pharetra massa massa.

                    </div>
                </div>
            </div>
        )
    }
}