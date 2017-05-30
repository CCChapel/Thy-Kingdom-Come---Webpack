import React from 'react';
import { Component } from 'react';

import CTA from '../page/cta';

/**
 * Displays the Contact Form
 * 
 * @className = Class Names to apply to root form element
 * @onComplete = Function to call when form completes submission
 */
export default class OneHundredTo500Story extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showError: false,
            errorMessage: '',
            showForm: true,
            showConfirmation: false,
            data: {
                field_53080526: '',
                field_53080527: '',
                field_53080528: ''
            }
        };

        this.showError = this.showError.bind(this);
        this.hideError = this.hideError.bind(this);
        this.showForm = this.showForm.bind(this);
        this.hideForm = this.hideForm.bind(this);
        this.showConfirmation = this.showConfirmation.bind(this);
        this.hideConfirmation = this.hideConfirmation.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        // this.onEmailChange = this.onEmailChange.bind(this);
        this.onLocationChange = this.onLocationChange.bind(this);
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
                field_53080526: e.target.value,
                field_48610314: this.state.data.field_48610314,
                field_53080527: this.state.data.field_53080527,
                field_53080528: this.state.data.field_53080528
            }
        });
    }

    // onEmailChange(e) {
    //     this.setState({
    //         data: {
    //             field_53080526: this.state.data.field_53080526,
    //             field_48610314: e.target.value,
    //             field_53080527: this.state.data.field_53080527,
    //             field_53080528: this.state.data.field_53080528
    //         }
    //     });
    // }

    onLocationChange(e) {
        this.setState({
            data: {
                field_53080526: this.state.data.field_53080526,
                field_48610314: this.state.data.field_48610314,
                field_53080527: e.target.value,
                field_53080528: this.state.data.field_53080528
            }
        });
    }

    onMessageChange(e) {
        this.setState({
            data: {
                field_53080526: this.state.data.field_53080526,
                field_48610314: this.state.data.field_48610314,
                field_53080527: this.state.data.field_53080527,
                field_53080528: e.target.value
            }
        });
    }

    isFormValid() {
        var form = document.getElementById("storyForm");

        return form.checkValidity();
    }

    handleSubmit(e) {
        //Hide error
        this.hideError();

        //Check Form Validity
        if (this.isFormValid()) {
            //Valid Form -> Submit
            const url = 'https://www.formstack.com/api/v2/form/2711017/submission.json?oauth_token=68529bb9523b67cff3c735d2e5f9176a';

            const request = new Request(url, {
                method: 'post',
                mode: "no-cors",
                body: JSON.toQueryString(this.state.data) //this.serializeData()
            });

            //Store hideForm, showConfirmation, onComplete locally because .then won't be able to access `this`
            const hideForm = this.hideForm;
            const showConfirmation = this.showConfirmation;
            const onComplete = this.props.onComplete;
            const showError = this.showError;

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

        let error = '';
        if (this.state.showError === true) {
            error = <div className="form--error add-bottom-margin">{this.state.errorMessage}</div>
        }

        if (this.state.showForm === true) {
            return (
                <form id="storyForm" className={this.props.className}>
                    <div>
                        <input name="field_53080526"
                            type="text" 
                            placeholder="Name"
                            required
                            value={this.state.data.field_53080526}
                            onChange={this.onNameChange} />
                    </div>

                    <div>
                        <input name="field_53080527"
                            type="text" 
                            placeholder="Location"
                            required
                            value={this.state.data.field_53080527}
                            onChange={this.onLocationChange} />
                    </div>

                    <div>
                        <textarea name="field_53080528"
                            placeholder="Story"
                            height="5em"
                            required
                            value={this.state.data.field_53080528}
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
                    <h1 className="center">Thanks for submitting your story!</h1>
                </div>
            );
        }

        return null;
    }
}