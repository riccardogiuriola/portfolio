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
class Experience extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div class="hero min-h-screen bg-base-200">
                <div class="text-center hero-content">
                    <div class="max-w-md">
                        <p>So... You liked what you saw?</p>
                        <h1 class="text-5xl font-bold">Get In Touch!</h1>
                        <Typewriter
                            options={{
                                strings: ['Arrivederci!', 'Goodbye!', 'Adios!', 'Au Revoir!', 'Adeus', 'Auf Wiedersehen!', 'Sayōnara!', 'Do svidaniya!', 'Annyeong!', 'Slan!', 'Tot ziens!'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        <p class="py-6">Although I'm not currently employed, my inbox is always open. Whether for a job proposal or just to say hi, I'll try my best to answer your email!</p>
                        <button class="btn btn-primary w-fit" onClick={() => window.open("mailto:riccardo.giuriola@hotmail.com")}>Say Hello</button>
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
))(withRouter(Experience));
