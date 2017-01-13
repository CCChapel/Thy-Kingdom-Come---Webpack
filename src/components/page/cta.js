import React from 'react';
import { Component } from 'react';

/**
 * Returns a Call-to-Action button
 * 
 * @text = text of the button
 * @color = color of the button
 * @strokeColor = color of the box
 * @onClick = function to call when CTA is clicked
 */
export default class CTA extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(data) {
        this.props.onClick(data);
    }

    render() {
        //Check defaults
        var color = {
            color: ''
        };
        if (this.props.color !== undefined) {
            color.color = this.props.color;
        }

        var stroke = {
            stroke: ''
        };
        if (this.props.strokeColor !== undefined) {
            stroke.stroke = this.props.strokeColor;
        }

        return (
            <div className="cta--wrapper" onClick={() => this.onClick(this.props.clickAction)}>
                <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                    <rect className="cta--shape" style={stroke} height="60" width="320" />
                </svg>
                <div className="cta--text" style={color}>{this.props.text}</div>
            </div>
        );
    }
}