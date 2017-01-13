import React from 'react';
import { Component } from 'react';

import Modal from './modal';
import Navigation from './navigation';
import Section from './section';
import CTA from './cta';

import MinistryPartnersTable from '../ministryPartners/ministryPartnersTable';

import Logo from '../images/logo';
import Clock from '../images/clock';
import VimeoVideo from '../embeds/vimeoVideo';
import ContactForm from '../forms/contact';

/**
 * Defines the base page
 */
export default class Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            modalContent: 'Initial Modal Content'
        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal(modalContent) {
        this.setState({
            showModal: true,
            modalContent: modalContent
        });
    }

    hideModal(e) {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div>
                <a id="top"></a>
                <Modal show={this.state.showModal} hide={this.hideModal}>
                    {this.state.modalContent}
                </Modal>

                <Navigation />

                <Section className="[ bg-clouds bg-cover ] [ justify-content--center ] [ overflow-x-hidden ]">
                    <Logo />
                </Section>

                <Section id="intro" className="bg-light-blue">
                    <div className="content-wrapper lock-width center-by-margin">
                        <h1 className="center">Thy Will Be Done</h1>

                        <p>
                            When his original students, the disciples, asked him how to pray, he said &ldquo;Pray 
                            like this: &lsquo;Our father, who art in Heaven&hellip; thy kingdom come, thy will be done, 
                            on earth, as it is in Heaven.&rsquo;&nbsp;&rdquo; If you are a student and follower of Jesus, 
                            God is your father who has a will and a kingdom. This year, our church-wide 
                            vision is to pray vigilantly and work diligently to bring this prayer to fruition; 
                            to bring our father&rsquo;s will and kingdom here to earth.
                        </p>

                        <p className="center-by-margin nine-tenths">
                            <VimeoVideo vimeoId="198552260"
                                width="640px"
                                height="360px" />
                        </p>

                        <p id="questions" className="center">
                            <CTA text="Questions" 
                                onClick={() => 
                                    this.showModal(
                                        <ContactForm className="content-wrapper lock-width center-by-margin"
                                            onComplete={this.hideModal} />
                                    )} />
                        </p>
                    </div>
                </Section>

                <Section id="spree" className="bg-medium-blue">
                    <div className="content-wrapper">
                        <div className="lock-width center-by-margin">
                            <h1 className="center">Local Outreach Spree</h1>

                            <ol>
                                <li>
                                    Complete eight kingdom assignments.
                                </li>

                                <li>
                                    Have your assignments initialed by each ministry partner after the assignment 
                                    is completed.
                                </li>

                                <li>
                                    Return this form to the bookstore (Hudson) or the Welcome Center 
                                    (Aurora/Highland Square) or to the church office during business hours to 
                                    receive your free Caf&eacute; 6:8 drink vouchers and cup or mug.
                                </li>
                            </ol>
                        </div>

                        <MinistryPartnersTable showModal={this.showModal} />
                    </div>
                </Section>

                <Section id="assignments" className="bg-dark-blue text-white">
                    <div className="content-wrapper">
                        <h1 className="center">Assignments</h1>

                        <p>
                            <Clock className="center-by-margin" height="250" width="250" />
                        </p>

                        <p className="center">
                            Keep checking back! We&rsquo;ll have more assignments for you soon.
                        </p>
                    </div>
                </Section>

                <Section className="bg-charcoal align-content--top auto-min-height text-white">
                    <div className="content-wrapper">
                        &copy; Copyright 2017 | <a href="https://ccchapel.com" target="_blank">Christ Community Chapel</a>
                    </div>
                </Section>
            </div>
        );
    }
}