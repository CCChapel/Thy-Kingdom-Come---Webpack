import React from 'react';
import { Component } from 'react';

import Parser from 'html-react-parser';

/**
 * Displays the ministry partner information
 * @information = Partner Information to display
 */
export default class MinistryPartnerInformation extends React.Component {
    render() {
        var options = [];

        this.props.information.options.forEach((option, index) => {
            options.push(
                <div className="add-bottom-margin" key={index}>
                    <h3 className="no-bottom-margin">{option.name}</h3>
                    <div>{ Parser(option.details) }</div>
                </div>
            );
        });

        return (
            <div>
                <div className="[ add-bottom-margin ][ flex wrap justify-content--flex-start align-content--flex-end ]">
                    <h1 className="portable--one-whole no-bottom-margin">
                        { Parser(this.props.information.name) }
                    </h1>
                    
                    <span className="sans-serif text-medium-blue text-smaller">
                        <a href={this.props.information.website}>Visit their site</a> <i className="fa fa-angle-right"></i>
                    </span>
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