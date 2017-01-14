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
                        <div className="[ text-bigger bold ]"><Checkbox /> { Parser(option.name) }</div>
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