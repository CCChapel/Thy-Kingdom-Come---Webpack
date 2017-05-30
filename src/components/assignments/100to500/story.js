import React from 'react';
import { Component } from 'react';

/**
 * Defines a row representing a Give10 week
 * @details = The information of the week
 * @handleClick = Method to handle the click event
 */
export default class Story extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(data) {
        this.props.handleClick(data);
    }

    render() {
        const nameField = "53080526";
        const locationField = "53080527";
        const storyField = "53080528";

        let name = this.props.details[nameField].value;
        let location = this.props.details[locationField].value;
        let story = this.props.details[storyField].value;

        return (
            <div className={"[ one-third portable--one-whole ] [ add-bottom-margin add-padding ] [ bg-light-blue text-white ] [ cursor-point ] [ fx-bottom-border fx-dark-blue ]"}>
                <div className="text-biggest text-black serif">
                    { name }
                </div>
                <div className="text-bigger text-dark-blue serif">
                    From { location }
                </div>
                <div className="text-limit">
                    { story }
                </div>
            </div>
        );
    }
}