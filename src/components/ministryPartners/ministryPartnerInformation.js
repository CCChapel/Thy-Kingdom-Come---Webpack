import React from 'react';
import { Component } from 'react';

import Parser from 'html-react-parser';

import CTA from '../page/cta';
import Checkbox from '../page/checkbox';
 
/**
 * Displays the ministry partner information
 * @information = Partner Information to display
 */
export default class MinistryPartnerInformation extends React.Component {
    render() {
        //Setup External Link
        let siteLink = null;
        if (this.props.information.website !== '') {
            siteLink = 
                <CTA text="Visit their Site" 
                        onClick={ () => {window.location = this.props.information.website} } />;
        }

        //Setup Options
        let options = new Array();
        this.props.information.options.forEach((option, index) => {
            options.push(
                <div className="add-bottom-margin [ one-third portable--one-whole ]" key={index}>
                    <div className="[ text-bigger bold ]"><Checkbox /> { Parser(option.name) }</div>
                    <div className="indent">{ Parser(option.details) }</div>
                </div>
            );
        });

        return (
            <div>
                <h1 className="center">
                    { Parser(this.props.information.name) }
                </h1>

                <p className="center center-by-margin lock-width">
                    { Parser(this.props.information.description) }
                </p>

                <div className="add-bottom-margin">
                    <h2 className="center">Options</h2>
                    <div className="desk-gutter--3-by-3 [ flex wrap justify-content--center align-items--flex-start ]">
                        {options}
                    </div>
                </div>
                
                <div className="flex wrap justify-content--center">
                    <div className="portable--one-whole">
                        {siteLink}
                    </div>

                    <div className="portable--one-whole">
                        <CTA text="Questions?" />
                    </div>
                </div>
            </div>
        );
    }
}