import React from 'react';
import { Component } from 'react';

import Parser from 'html-react-parser';

import CTA from '../page/cta';
import Checkbox from '../page/checkbox';

import Cookies from '../../includes/third-party/js.cookie';
 
/**
 * Displays the ministry partner information
 * @information = Partner Information to display
 */
export default class MinistryPartnerInformation extends React.Component {
    constructor(props) {
        super(props);

        this.information = props.information;

        this.setCookie = this.setCookie.bind(this);
        this.storeCheck = this.storeCheck.bind(this);
        this.removeCheck = this.removeCheck.bind(this);
    }

    componentDidMount() {
        //Retrieve information stored in cookie
        this.cookieInformation = Cookies.getJSON('ccc');

        //Define cookie, if it doesn't exist
        if (this.cookieInformation === undefined) {
            //Create an empty object
            this.cookieInformation = {};
        }

        //Let's check some data
        for (let ministry in this.cookieInformation) {
            //See if the cookies have data for this ministry
            if (this.information.name === ministry) {
                //Iterate through selected choices
                this.cookieInformation[ministry].forEach((optionId, index) => {
                    //Add checked value
                    this.information.options[optionId].isChecked = true;
                });
            }
        }
    }

    storeCheck(ministry, id) {
        //Check if we have data from this ministry
        if (this.cookieInformation[ministry] === undefined) {
            //Add checked value
            this.cookieInformation[ministry] = new Array();
        }

        //Check if this option is already in array
        if (this.cookieInformation[ministry].indexOf(id) < 0) {
            //It's not, so add it
            this.cookieInformation[ministry].push(id);        
        }

        //Update JSON data
        this.information.options[id].isChecked = true;
    }

    removeCheck(ministry, id) {
        //Check if we have data from this ministry
        if (this.cookieInformation[ministry] === undefined) {
            //Nothing here? Do nothing
            return;
        }

        //Check if this value even exists
        let index = this.cookieInformation[ministry].indexOf(id);

        if (index < 0) {
            //Nothing to remove
            return;
        }

        //Remove id of unchecked item
        this.cookieInformation[ministry] = this.cookieInformation[ministry].splice(index, 1);

        //Update JSON data
        this.information.options[id].isChecked = false;
    }

    setCookie(ministry, id, isChecked) {
        if (isChecked === true) {
            this.storeCheck(ministry, id);
        }
        else {
            this.removeCheck(ministry, id);
        }

        //Set cookies
        Cookies.set('ccc', this.cookieInformation, { expires: 365 });
    }

    render() {
        //Setup External Link
        let siteLink = null;
        if (this.information.website !== '' && this.information.website !== undefined) {
            siteLink = 
                <CTA text="Visit their Site" 
                     onClick={ () => {window.location = this.information.website} } />;
        }

        //Setup Questions
        let questionsLink = null;
        if (this.information.contactEmail !== '' && this.information.contactEmail !== undefined) {
            let href = String.format("mailto:{0}", [ this.information.contactEmail ]);

            questionsLink =
                <CTA text="Questions"
                     onClick={ () => {window.location = href} } />;
        }

        //Setup Options
        let isChecked = false;
        let options = new Array();
        let optionsContent = null;

        //Check if we have any options
        if (this.information.options !== undefined) {
            this.information.options.forEach((option, index) => {
                //Check if it should be checked
                let ministry = this.information.name;

                console.log(option);
                if (option.isChecked === true) {
                    isChecked = option.isChecked;
                }
                else {
                    isChecked = false;
                }

                options.push(
                    <div className="add-bottom-margin" key={index}>
                        <div className="[ text-bigger bold ]"><Checkbox isChecked={isChecked} onClick={(isChecked) => { this.setCookie(ministry, option.id, isChecked) } } /> { Parser(option.name) }</div>
                        <div className="indent">{ Parser(option.details) }</div>
                    </div>
                );
            });

            optionsContent = 
                <div className="one-half portable--one-whole">
                    <div className="add-bottom-margin">
                        <h2 className="no-bottom-margin">Spree Options</h2>

                        <div>
                            {options}
                        </div>
                    </div>
                </div>;
        }

        return (
            <div className="flex">
                <div className="lock-width center-by-margin">
                    <h1 className="center">
                        { Parser(this.information.name) }
                    </h1>

                    <div className="flex portable--stack align-items--flex-start">
                        <div className="one-half portable--one-whole add-right-margin--double">
                            <h2 className="no-bottom-margin">What They&rsquo;re About</h2>
                            
                            <p>
                                { Parser(this.information.description) }
                            </p>
                        </div>

                        {optionsContent}
                    </div>

                    <div className="center center-by-margin lock-width">
                        <div>
                            {siteLink}

                            {questionsLink}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}