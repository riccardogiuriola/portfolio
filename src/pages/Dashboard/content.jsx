import './style.scss';

/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Element } from 'react-scroll';
import classnames from 'classnames';

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

        const {
            settings
        } = this.props;

        return (
            <Fragment>
                <div className={classnames(settings.overlay ? 'overlay' : '')}></div>
                <Hero />
                <Element id='about' name='about'>
                    <About />
                </Element>
                <div className='h-56 bg-base-200'></div>
                <Element id='experience' name='experience'>
                    <Experience />
                </Element>
                <div className='h-56 bg-base-200'></div>
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

export default connect(({ settings }) => (
    {
        settings
    }
))(Content);