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

        this.setCookie = this.setCookie.bind(this);
        this.storeCheck = this.storeCheck.bind(this);
        this.removeCheck = this.removeCheck.bind(this);
    }

    storeCheck(ministry, id) {
        //Get checked list
        var checked = Cookies.getJSON('ccc');

        //Check if we have data from cookie
        if (checked === undefined) {
            //Create an empty object
            checked = {};
        }

        //Check if we have data from this ministry
        if (checked[ministry] === undefined) {
            //Add checked value
            checked[ministry] = new Array();
        }

        //Check if this option is already in array
        if (checked[ministry].indexOf(id) < 0) {
            //It's not, so add it
            checked[ministry].push(id);        
        }
        
        //Set cookies
        Cookies.set('ccc', checked, { expires: 7 });
    }

    removeCheck(ministry, id) {
        //Get checked list
        var checked = Cookies.getJSON('ccc');

        //Check and see if there's anything to remove
        if (checked === undefined) {
            //None, then do nothing
            return;
        }

        //Check if we have data from this ministry
        if (checked[ministry] === undefined) {
            //Nothing here? Do nothing
            return;
        }

        //Check if this value even
        var index = checked[ministry].indexOf(id);

        if (index < 0) {
            //Nothing to remove
            return;
        }

        checked[ministry].splice(index, 1);

        Cookies.set('ccc', checked, { expires: 7 });
    }

    setCookie(ministry, id, isChecked) {
        //console.log(isChecked);

        if (isChecked === true) {
            this.storeCheck(ministry, id);
        }
        else {
            this.removeCheck(ministry, id);
        }
        
        //Cookies.set('ccc', checked, { expires: 7 });

        //console.log(Cookies.get());
    }

    render() {
        //Setup External Link
        let siteLink = null;
        if (this.props.information.website !== '' && this.props.information.website !== undefined) {
            siteLink = 
                <CTA text="Visit their Site" 
                     onClick={ () => {window.location = this.props.information.website} } />;
        }

        //Setup Questions
        let questionsLink = null;
        if (this.props.information.contactEmail !== '' && this.props.information.contactEmail !== undefined) {
            var href = String.format("mailto:{0}", [ this.props.information.contactEmail ]);

            questionsLink =
                <CTA text="Questions"
                     onClick={ () => {window.location = href}} />;
        }

        //Setup Options
        let options = new Array();
        let optionsContent = null;
        if (this.props.information.options !== undefined) {
            this.props.information.options.forEach((option, index) => {
                options.push(
                    <div className="add-bottom-margin" key={index}>
                        <div className="[ text-bigger bold ]"><Checkbox onClick={(isChecked) => { this.setCookie(this.props.information.name, option.id, isChecked) } } /> { Parser(option.name) }</div>
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
                        { Parser(this.props.information.name) }
                    </h1>

                    <div className="flex portable--stack align-items--flex-start">
                        <div className="one-half portable--one-whole add-right-margin--double">
                            <h2 className="no-bottom-margin">What They&rsquo;re About</h2>
                            
                            <p>
                                { Parser(this.props.information.description) }
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