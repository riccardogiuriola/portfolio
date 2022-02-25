/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

/**
 * Internal Dependencies
 */

/**
 * Component
 */
class Hero extends Component {
    constructor(props) {
        super(props);

        this.state = {
            typewriter_strings: [
                'Javascript',
                'Python',
                'PHP',
                'Java',
                'C++'
            ]
        }
    }

    render() {

        const {
            typewriter_strings
        } = this.state;

        return (
            <div class="hero min-h-screen bg-base-200">
                <div class="text-left hero-content">
                    <div class="max-w-md">
                        <p>Hi, my name is</p>
                        <h1 class="text-5xl font-bold">Riccardo Giuriola</h1>
                        <div class="columns-2 gap-0">
                            <p className='w-max'>I build things for the web using</p>
                            <Typewriter
                                className='w-max'
                                options={{
                                    strings: typewriter_strings,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                        <p class="py-6 max-w-sm md:max-w-md lg:max-w-md">I'm a Web Developer based in Milan, Italy specializing in building and designing exceptional, high-quality websites and applications.</p>
                        <button class="btn btn-primary w-fit" onClick={() => window.open("mailto:riccardo.giuriola@hotmail.com")}>Get In Touch</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(({ settings }) => (
    {
        settings
    }
))(withRouter(Hero));
