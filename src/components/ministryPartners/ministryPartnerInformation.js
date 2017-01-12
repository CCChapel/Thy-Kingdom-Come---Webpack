import React from 'react';
import { Component } from 'react';

function breakLine(text) {
    var regex = /(<br \/>)/g;
    return text.split(regex).map(function(line) {
        return line.match(regex) ? React.createElement('br') : line;
    });
}

/**
 * Displays the ministry partner information
 * @information = Partner Information to display
 */
export default class MinistryPartnerInformation extends React.Component {
    render() {
        var options = [];

        this.props.information.options.forEach((option, index) => {
            options.push(
                <div className="add-bottom-margin">
                    <h3 className="no-bottom-margin">{option.name}</h3>
                    <div>{breakLine(option.details)}</div>
                </div>
            );
        });

        return (
            <div>
                <h1>
                    {this.props.information.name}
                    
                    <span className="sans-serif text-medium-blue text-smaller">
                        <a href={this.props.information.website}>Visit their site</a>
                        <i className="fa fa-angle-right"></i>
                    </span>
                </h1>

                <div className="add-bottom-margin">
                    {this.props.information.description}
                </div>

                <h2 className="no-bottom-margin">Options</h2>
                {options}
            </div>
        );
    }
}