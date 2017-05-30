import React from 'react';
import { Component } from 'react';

import axios from 'axios';

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
        // const url = 'https://www.formstack.com/api/v2/form/2711017/submission.jsonp?search_field_x=53080530&search_value_x=True&data=true&expand_data=true&oauth_token=16559620d4a936952cde88ee1070a6cc';
        const url = './data/100to500.json';
        const request = new Request(url, {
                mode: 'no-cors',
                method: 'get',
                headers: {
                    Accept: 'application/json'
                }
            });
        
        fetch(request)
            .then(function(response) {  
                console.log('Response: ', response);

                return response.text();  
            })
            .then(function(data) {
                _this.setState({ data: data });

                console.log('Request succeeded with JSON response', data);
            }).catch(function(error) {
                console.log('Request failed', error);
            });

        // fetch(url, {
        //     method: 'GET',
        //     headers: {
        //         Accept: 'application/json',
        //     },
        // },
        // ).then(response => {
        //     console.log(response);

        //     if (response.ok) {
        //         response.json().then(json => {
        //             console.log(json);
        //         });
        //     }
        // });

        // axios.get(url)
        //     .then(function (response) {
        //         console.log("SUCCESS");
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log("ERROR");
        //         console.log(error);
        //     });
    }

    render() {
        return (
            <div>
                { this.state.data }
            </div>
        );
    }
}