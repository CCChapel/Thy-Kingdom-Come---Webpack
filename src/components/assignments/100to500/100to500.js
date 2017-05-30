import React from 'react';
import { Component } from 'react';

/**
 * Renders the 100 to 500 assignment section
 * 
 * @showModal = Method to show the modal window
 */
export default class OneHundredto500 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };

        // this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        //Load Information
        const _this = this;       //Make this available in fetch
        const url = 'https://www.formstack.com/api/v2/form/2711017/submission.jsonp?per_page=100&search_field_0=47423525&search_value_0=True&data=true&expand_data=true&oauth_token=16559620d4a936952cde88ee1070a6cc&callback=JSON_CALLBACK';
        const request = new Request(url, {
                method: 'get',
                mode: 'no-cors'
            });
        
        fetch(request)
            .then(function json(response) {  
                return response.json()  
            })
            .then(function(data) {
                _this.setState({ data: data });
                console.log('Request succeeded with JSON response', data);
            }).catch(function(error) {
                console.log('Request failed', error);
            });
    }

    render() {

    }
}