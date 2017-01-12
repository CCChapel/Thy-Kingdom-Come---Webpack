import React from 'react';
import { Component } from 'react';

/**
 * 
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
    }

    render() {
        let boxClass = "fa-square-o";
        if (this.state.isChecked === true) {
            console.log('box is checked');
            boxClass = "fa-check-square-o";
        }

        var className = String.format("[ fa {0} ] cursor-point", [ boxClass ]);

        return (
            <i className={className} onClick={this.onClick}></i>
        );
    }
}