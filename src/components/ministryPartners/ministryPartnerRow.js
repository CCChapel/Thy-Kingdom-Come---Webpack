import React from 'react';
import { Component } from 'react';

import MinistryPartnerInformation from './ministryPartnerInformation';

import Parser from 'html-react-parser';

/**
 * Defines a row representing a ministry partner
 * @partner = The partner to display
 * @handleClick = Method to handle the click event
 */
export default class MinistryPartnerRow extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(data) {
        this.props.handleClick(data);
    }

    render() {
        return (
            <div 
                className="[ one-third portable--one-whole ] [ bg-medium-blue ] [ cursor-point ] [ add-bottom-margin add-padding ] [ fx-bottom-border fx-light-blue ]"  
                onClick={() => this.handleClick(<MinistryPartnerInformation information={this.props.partner} />)}>
                { Parser(this.props.partner.name) }
            </div>
        );
    }
}