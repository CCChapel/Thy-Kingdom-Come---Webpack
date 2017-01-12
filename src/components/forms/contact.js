import React from 'react';
import { Component } from 'react';

import CTA from '../page/cta';

/**
 * Displays the Contact Form
 * 
 * @className = Class Names to apply to root form element
 * @onComplete = Function to call when form completes submission
 */
export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showError: false,
            errorMessage: '',
            showForm: true,
            showConfirmation: false,
            data: {
                field_48610311: '',
                field_48610314: '',
                field_48610320: '',
                field_48610323: ''
            }
        };

        this.showError = this.showError.bind(this);
        this.hideError = this.hideError.bind(this);
        this.showForm = this.showForm.bind(this);
        this.hideForm = this.hideForm.bind(this);
        this.showConfirmation = this.showConfirmation.bind(this);
        this.hideConfirmation = this.hideConfirmation.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onSubjectChange = this.onSubjectChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    showError(message) {
        this.setState({
            showError: true,
            errorMessage: message
        });
    }
    hideError() {
        this.setState({
            showError: false,
            errorMessage: ''
        });
    }

    showForm(e) {
        this.setState({
            showForm: true
        });
    }
    hideForm(e) {
        this.setState({
            showForm: false
        });
    }

    showConfirmation(e) {
        this.setState({
            showConfirmation: true
        });
    }
    hideConfirmation(e) {
        this.setState({
            showConfirmation: false
        });
    }

    onNameChange(e) {
        this.setState({
            data: {
                field_48610311: e.target.value,
                field_48610314: this.state.data.field_48610314,
                field_48610320: this.state.data.field_48610320,
                field_48610323: this.state.data.field_48610323
            }
        });
    }

    onEmailChange(e) {
        this.setState({
            data: {
                field_48610311: this.state.data.field_48610311,
                field_48610314: e.target.value,
                field_48610320: this.state.data.field_48610320,
                field_48610323: this.state.data.field_48610323
            }
        });
    }

    onSubjectChange(e) {
        this.setState({
            data: {
                field_48610311: this.state.data.field_48610311,
                field_48610314: this.state.data.field_48610314,
                field_48610320: e.target.value,
                field_48610323: this.state.data.field_48610323
            }
        });
    }

    onMessageChange(e) {
        this.setState({
            data: {
                field_48610311: this.state.data.field_48610311,
                field_48610314: this.state.data.field_48610314,
                field_48610320: this.state.data.field_48610320,
                field_48610323: e.target.value
            }
        });
    }

    isFormValid() {
        var form = document.getElementById("contactForm");

        return form.checkValidity();
    }

    handleSubmit(e) {
        //Hide error
        this.hideError();

        //Check Form Validity
        if (this.isFormValid()) {
            //Valid Form -> Submit
            var url = 'https://www.formstack.com/api/v2/form/2569143/submission.json?oauth_token=68529bb9523b67cff3c735d2e5f9176a';

            var request = new Request(url, {
                method: 'post',
                mode: "no-cors",
                body: JSON.toQueryString(this.state.data) //this.serializeData()
            });

            //Store hideForm, showConfirmation, onComplete locally because .then won't be able to access `this`
            var hideForm = this.hideForm;
            var showConfirmation = this.showConfirmation;
            var onComplete = this.props.onComplete;
            var showError = this.showError;

            fetch(request)
                .then(function(response) {
                    //Hide the form
                    hideForm();

                    //Show Confirmation Message
                    showConfirmation();

                    //Delay 5 seconds, then call onComplete
                    setTimeout(onComplete, 5000);
                })
                .catch(function(err) {
                    //Log the error
                    console.log(err);
                    showError("Hmm\u2026 Something didn\u2019t go quite as planned. Please try again.");
                });

            //TO DO: Figure out why we're not getting event
            //e.preventDefault();
        }
        else {
            //Invalid form -> Show error
            this.showError("Oops\u2026 Something\u2019s not quite right. Take another look.");
        }
    }

    render() {
        //var formId = '2569143';
        //var token = '68529bb9523b67cff3c735d2e5f9176a';
        //var url = 'package.json';

        var error = '';
        if (this.state.showError === true) {
            error = <div className="form--error add-bottom-margin">{this.state.errorMessage}</div>
        }

        if (this.state.showForm === true) {
            return (
                <form id="contactForm" className={this.props.className}>
                    <div>
                        <input name="field_48610311"
                            type="text" 
                            placeholder="Name"
                            required
                            value={this.state.data.field_48610311}
                            onChange={this.onNameChange} />
                    </div>

                    <div>
                        <input name="field_48610314"
                            type="text" 
                            placeholder="Email"
                            required
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                            value={this.state.data.field_48610314}
                            onChange={this.onEmailChange} />
                    </div>

                    <div>
                        <input name="field_48610320"
                            type="text" 
                            placeholder="Subject"
                            required
                            value={this.state.data.field_48610320}
                            onChange={this.onSubjectChange} />
                    </div>

                    <div>
                        <textarea name="field_48610323"
                            placeholder="Message"
                            height="5em"
                            required
                            value={this.state.data.field_48610323}
                            onChange={this.onMessageChange} />
                    </div>

                    {error}
                    
                    <div className="center">
                        <CTA text="Submit" onClick={(e) => this.handleSubmit(e)} />
                    </div>
                </form>
            );
        }

        if (this.state.showConfirmation === true) {
            return (
                <div className={this.props.className}>
                    <h1 className="center">Thanks for submitting your message! Someone will be in touch.</h1>
                </div>
            );
        }

        return null;
    }
}