/**
 * External Dependencies
 */
import React, { Component, Fragment, createRef } from 'react';
import { connect } from 'react-redux';
import { Element } from 'react-scroll'

/**
 * Internal Dependencies
 */
import Hero from '../../components/hero';
import About from '../../components/about';
import Experience from '../../components/experience';
import Work from '../../components/work';
import Contacts from '../../components/contacts';
import Footer from '../../components/footer';

/**
 * Component
 */
class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Hero />
                <Element id='about' name='about'>
                    <About />
                </Element>
                <Element id='experience' name='experience'>
                    <Experience />
                </Element>
                <Element id='work' name='work'>
                    <Work />
                </Element>
                <Element id='contacts' name='contacts'>
                    <Contacts />
                </Element>
                <Footer />
            </Fragment>
        );
    }
}

export default Content;
