import React from 'react';
import { Component } from 'react';

/**
 * Inserts a graphical checkbox that can be checked and unchecked with a mouse click
 */
export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isChecked: false
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({ isChecked: !this.state.isChecked });

        if (this.props.onClick !== undefined) {
            this.props.onClick();
        }
    }

    render() {
        let boxClass = "fa-square-o";
        if (this.state.isChecked === true) {
            boxClass = "fa-check-square-o";
        }

        var className = String.format("[ fa {0} ] cursor-point", [ boxClass ]);

        return (
            <i className={className} onClick={this.onClick}></i>
        );
    }
}