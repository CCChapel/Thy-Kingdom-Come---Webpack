import React from 'react';
import { Component } from 'react';

import Parser from 'html-react-parser';

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
                <span className="sans-serif text-smaller">
                    <a href={this.props.information.website}>Visit their site <i className="fa fa-angle-right"></i></a> 
                </span>;
        }
        
        //Setup Options
        let options = new Array();
        this.props.information.options.forEach((option, index) => {
            options.push(
                <div className="add-bottom-margin" key={index}>
                    <h3 className="no-bottom-margin">{ Parser(option.name) }</h3>
                    <div>{ Parser(option.details) }</div>
                </div>
            );
        });

        return (
            <div>
                <div className="[ add-bottom-margin ][ flex wrap justify-content--flex-start align-items--flex-end ]">
                    <h1 className="portable--one-whole [ no-bottom-margin add-right-margin ]">
                        { Parser(this.props.information.name) }
                    </h1>
                    
                    {siteLink}
                </div>

                <div className="add-bottom-margin">
                    { Parser(this.props.information.description) }
                </div>

                <h2 className="no-bottom-margin">Options</h2>
                {options}
            </div>
        );
    }
}