import React from 'react';
import { Component } from 'react';

import axios from 'axios';

import CTA from '../../../components/page/cta';
import Story from './story';
import OneHundredTo500Story from '../../forms/100to500Story';

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

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        //Load Information
        const _this = this;       //Make this available in fetch
        // const url = 'https://www.formstack.com/api/v2/form/2711017/submission.jsonp?search_field_x=53080530&search_value_x=True&data=true&expand_data=true&oauth_token=16559620d4a936952cde88ee1070a6cc';
        //const url = './data/100to500.json';

        const url = 'http://cors-anywhere.herokuapp.com/https://www.formstack.com/api/v2/form/2711017/submission.json?search_field_0=53080530&search_value_0=True&data=true&expand_data=true&oauth_token=16559620d4a936952cde88ee1070a6cc';
        const request = new Request(url, {
                method: 'get',
                headers: {
                    Accept: 'application/json'
                }
            });
        
        fetch(request)
            .then(function(response) {  
                // console.log('Response: ', response);

                return response.json();  
            })
            .then(function(data) {
                _this.setState({ data: data["submissions"] });

                // console.log('Request succeeded with JSON response', data);
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

    handleClick(content) {
        this.props.showModal(content);
    }

    render() {
        //Create container for rows
        const rows = [];

        //Loop through each partner to create row
        console.log(this.state.data);
        this.state.data.forEach((storyDetails, index) => {
            //Check for empty data node
            if (storyDetails.data.length === undefined) {
                rows.push(
                    <Story
                        key={index}
                        details={storyDetails.data}
                        handleClick={this.handleClick} />
                );
            }
        });

        return (
            <div className="lock-width center-by-margin">
                <h1 className="center no-bottom-margin">Multiplying the Kingdom</h1>
                <h3 className="center">A Kingdom Assignment</h3>

                <p>
                    Were you the recipient of a hundred dollar bill for the Multiplying the Kingdom campaign? 
                    Share the story of how you spent your money and the affect it had on bringing God&rsquo;s kingdom to earth here! 
                </p>

                <div className="flex wrap portable--stack align-items--stretch justify-content--center">
                    { rows }
                </div>

                <div className="center">
                    <CTA text="Share Your Story" 
                        onClick={() => 
                            this.handleClick(
                                <OneHundredTo500Story className="content-wrapper lock-width center-by-margin"
                                    onComplete={this.hideModal} />
                            )} />
                </div>
            </div>
        );
    }
}