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
            <footer class="p-6 footer bg-primary text-primary-content footer-center">
                <div>
                    <p>Designed & Built by Riccardo Giuriola</p>
                </div>
            </footer>
        );
    }
}

export default connect(({ settings }) => (
    {
        settings
    }
))(withRouter(Hero));
