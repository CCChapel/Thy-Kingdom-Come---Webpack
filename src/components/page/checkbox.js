import React from 'react';
import { Component } from 'react';

/**
 * Inserts a graphical checkbox that can be checked and unchecked with a mouse click
 */
export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isChecked: props.isChecked
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        let newState = !this.state.isChecked;

        this.setState({ isChecked: newState });

        if (this.props.onClick !== undefined) {
            this.props.onClick(newState);
        }
    }

    render() {
        let boxClass = "fa-square-o";
        if (this.state.isChecked === true) {
            boxClass = "fa-check-square-o";
        }

        //let className = String.format("[ fa {0} ] cursor-point", [ boxClass ]);
        let className = `[ fa ${boxClass} ] cursor-point`;

        return (
            <i className={className} onClick={this.onClick}></i>
        );
    }
}