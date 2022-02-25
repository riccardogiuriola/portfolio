import './style.scss';

/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Particles from "react-tsparticles";

/**
 * Internal Dependencies
 */

/**
 * Component
 */
class ParticlesPlugin extends Component {
    constructor(props) {
        super(props);
        this.particlesInit = this.particlesInit.bind(this);
        this.particlesLoaded = this.particlesLoaded.bind(this);
    }

    particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    particlesLoaded = (container) => {
        console.log(container);
    };

    render() {

        const {
            settings
        } = this.props;

        return (
            <Particles id="tsparticles" init={this.particlesInit} loaded={this.particlesLoaded} options={settings.particles} />
        );
    }
}

export default connect(({ settings }) => (
    {
        settings
    }
))(withRouter(ParticlesPlugin));
