import React from 'react';
import { Component } from 'react';

import Give10Row from './give10Row';

/**
 * Renders the Give10 assignment section
 * 
 * @showModal = Method to show the modal window
 */
export default class Give10Assignment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            give10Info: []
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        //Load Information
        const _this = this;       //Make this available in fetch
        const url = "./data/give10.json";
        const request = new Request(url, {
                method: 'get',
                mode: 'no-cors'
            });
        
        fetch(request)
            .then(function json(response) {  
                return response.json()  
            })
            .then(function(data) {
                _this.setState({ give10Info: data });
                // console.log('Request succeeded with JSON response', data);
            }).catch(function(error) {
                // console.log('Request failed', error);
            });
    }

    handleClick(content) {
        this.props.showModal(content);
    }

    render() {
        //Create container for rows
        const rows = [];

        //Loop through each partner to create row
        this.state.give10Info.forEach((weekInfo, index) => {
            rows.push(
                <Give10Row
                    key={index}
                    weekInfo={weekInfo}
                    handleClick={this.handleClick} />
            );
        });

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

                <div className="flex portable--stack align-items--stretch justify-content--center">
                    {rows}
                </div>

                <div className="[ lock-width ] [ center center-by-margin ]">
                    <p>
                        <i className="fa fa-mobile fa-3x" style={{ verticalAlign: 'middle' }} aria-hidden="true"></i> &nbsp;Get reminded everyday at 7:10 a.m. and 7:10 p.m. by texting Give10 to 797979.<br />
                        <span className="text-smaller">Standard message and data rates may apply. Please consult your wireless provider, if you have any questions.</span>
                    </p>
                </div>
            </div>
        );
    }
}