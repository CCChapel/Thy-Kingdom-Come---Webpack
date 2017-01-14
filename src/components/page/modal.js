import React from 'react';
import { Component } from 'react';

/**
 * Defines the modal section of the page
 * @show: When true, the modal is shown
 */
export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.hide = this.hide.bind(this);
    }

    hide() {
        this.props.hide();
    }

    render() {
        if (this.props.show === true) {
            return (
                <div className="modal">
                    <div className="modal-close text-dark-blue" onClick={this.hide}><i className="fa fa-3x fa-close" aria-hidden="true"></i></div>

                    <div className="modal-content content-wrapper">
                        {this.props.children}
                    </div>
                </div>
            );
        }
        else {
            return null;
        }
    }
}