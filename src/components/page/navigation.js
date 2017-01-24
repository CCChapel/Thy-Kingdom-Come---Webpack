import React from 'react';
import { Component } from 'react';

/**
 * Add a Navigation Component
 * 
 * Based on Triangular Mobile Navigation by MoKev
 * http://codepen.io/MoKev/pen/htrgC
 */
export default class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isChecked: true,
        };

        this.onCheckedChange = this.onCheckedChange.bind(this);
    }

    onCheckedChange() {
        this.setState({ isChecked: !this.state.isChecked });
    }

    render() {
        let faIcon = "fa fa-times";
        if (this.state.isChecked === true) {
            faIcon = "fa fa-bars";
        }

        return (
            <nav className="menu">
                <input id="menu__button" type="checkbox" defaultChecked={this.state.isChecked} onClick={this.onCheckedChange} />
                <a className="menu__item scroll" href="#intro">
                    <span className="menu__item-title">What&rsquo;s This About?</span>
                </a>
                <a className="menu__item scroll" href="#spree">
                    <span className="menu__item-title">Local Outreach Spree</span>
                </a>
                <a className="menu__item scroll" href="#assignments">
                    <span className="menu__item-title">Kingdom Assignments</span>
                </a>
                <a className="menu__item scroll" href="#questions">
                    <span className="menu__item-title">Questions</span>
                </a>
                <label className="menu__close" htmlFor="menu__button" onClick={this.onCheckedChange}>
                    <span className="menu__close-icon"><i className={faIcon}></i></span>
                </label>
            </nav>
        );
    }
}