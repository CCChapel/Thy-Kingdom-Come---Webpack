import React from 'react';
import { Component } from 'react';

import Give10Week1 from './week1';

/**
 * Defines a row representing a ministry partner
 * @partner = The partner to display
 * @handleClick = Method to handle the click event
 */
export default class Give10Assignment extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(data) {
        this.props.showModal(data);
    }

    render() {
        return (
            <div>
                <div className="[ lock-width ] [ center center-by-margin ] [ add-bottom-margin ]">
                    <div className="one-third center-by-margin">
                        <img src="images/give10.svg" />
                    </div>

                    <div>
                        Give10 is meant to help you know and love Jesus in a deeper way, especially as we prepare to celebrate Easter and his resurrection. 
                    </div>
                </div>

                <div className="flex wrap justify-content--center">
                    <div 
                        className="[ one-fifth portable--one-whole ] [ bg-medium-blue ] [ cursor-point ] [ add-bottom-margin add-padding ] [ fx-bottom-border fx-light-blue ]"
                        onClick={() => this.handleClick(<Give10Week1 />)}>
                        Week 1: Solitude
                    </div>
                </div>

                <div className="[ lock-width ] [ center center-by-margin ]">
                    <h2>Don&rsquo;t Miss a Moment!</h2>
                    <p>
                        Get reminded everyday at 7:10 a.m. and 7:10 p.m. by texting Give10 to 797979.<br />
                        <span className="text-smaller">Standard message and data rates may apply. Please consult your wireless provider, if you have any questions.</span>
                    </p>
                </div>
            </div>
        );
    }
}