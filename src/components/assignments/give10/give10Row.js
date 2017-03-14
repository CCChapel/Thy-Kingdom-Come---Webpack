import React from 'react';
import { Component } from 'react';

import Parser from 'html-react-parser';

/**
 * Defines a row representing a Give10 week
 * @weekInfo = The information of the week
 * @handleClick = Method to handle the click event
 */
export default class Give10Row extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(data) {
        this.props.handleClick(data);
    }

    render() {
        //Define classes for row
        let classes = "";
        let click = null;
        let startDate = new Date(this.props.weekInfo.startDate);

        //Check if this is live
        if ((Date.parse(this.props.weekInfo.startDate) > Date.now()) && (this.props.weekInfo.week != 1) ) {
            classes += "[ bg-light-gray ] [ cursor-default ] ";
        }
        else {
            classes += "[ bg-light-blue text-white ] [ cursor-point ] [ fx-bottom-border fx-dark-blue ] ";
            click = () => this.handleClick(Parser(this.props.weekInfo.description));
        }

        return (
            <div 
                className={"[ one-fifth portable--one-whole ] [ add-bottom-margin add-padding ]" + classes}
                onClick={click}>
                <div className="[ flex justify-content--flex-start ]">
                    <div className="[ one-quarter ] [ center ]">
                        <div className="text-biggest bold">
                            { this.props.weekInfo.week }
                        </div>
                    </div>

                    <div className="[ three-quarters ]">
                        { Parser(this.props.weekInfo.theme) }

                        <div className="text-smaller">
                            (Starting { startDate.getMonth() + 1}.{startDate.getDate()})
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}