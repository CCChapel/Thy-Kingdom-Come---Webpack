import React from 'react';
import { Component } from 'react';

import MinistryPartnerRow from './ministryPartnerRow';

/**
 * Defines a Ministry Table of Ministry Partners
 */
export default class MinistryPartnersTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ministryPartners: []
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        //Load Ministry Partners
        const _this = this;       //Make this available in fetch
        const url = "./data/outreach-spree.json";
        const request = new Request(url, {
                method: 'get',
                mode: 'no-cors'
            });
        const loadMinistryPartners = this.loadMinistryPartners;
        
        fetch(request)
            .then(function json(response) {  
                return response.json()  
            })
            .then(function(data) {
                _this.setState({ ministryPartners: data });
                //console.log('Request succeeded with JSON response', data);
            }).catch(function(error) {
                //console.log('Request failed', error);
            });
    }

    handleClick(content) {
        this.props.showModal(content);
    }

    render() {
        //Create container for rows
        const rows = [];

        //Loop through each partner to create row
        this.state.ministryPartners.forEach((partner, index) => {
            rows.push(
                <MinistryPartnerRow
                    key={index}
                    partner={partner} 
                    handleClick={this.handleClick} />
            );
        });

        return (
            <div className="flex wrap align-items--stretch">
                {rows}
            </div>
        )
    }
}