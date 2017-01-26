import React from 'react';
import { Component } from 'react';

/**
 * Defines a section on the page
 * @backgroundColor = background color
 * @backgroundImage = image to display in the background
 * @id = id of the base div
 */
export default class Section extends React.Component {
    render() {
        const divStyle = {
            backgroundColor: this.props.backgroundColor,
            backgroundImage: this.props.backgroundImage,
        };

        let className = "section flex fill-screen-height ";
        if (this.props.className !== undefined) {
            className += this.props.className;
        }

        return (
            <div id={this.props.id} className={className} style={divStyle}>
                {this.props.children}
            </div>
        );
    }
}