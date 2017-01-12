import React from 'react';
import { Component } from 'react';

import MinistryPartnerInformation from './ministryPartnerInformation';

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
                className="[ one-third portable--one-whole ] [ bg-light-blue ] [ text-bigger cursor-point ] [ add-bottom-margin add-padding ] [ fx-bottom-border fx-dark-blue ]"  
                onClick={() => this.handleClick(<MinistryPartnerInformation information={this.props.partner} />)}>
                {this.props.partner.name}
            </div>
        );
    }
}