/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Internal Dependencies
 */
import Icon from '../icon';

/**
 * Component
 */
class Work extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div class="hero min-h-screen bg-base-200">
                <div class="text-left hero-content">
                    <div class="grid grid-rows-1 gap-4 max-w-5xl">
                        <div class="grid grid-cols-8 gap-4 md:pl-20">
                            <div class="col-span-8">
                                <h1 class="text-3xl sm:text-3xl md:text-5xl lg:text-5xl font-bold w-full">Some Things I've Built</h1>
                                <div class="divider w-full"></div>
                            </div>
                            <div class="w-full pl-2 col-span-8 md:col-span-5 lg:col-span-5 items-start justify-start">
                                <figure><img className="rounded-lg" src="images/portfolio.png" alt="portfolio" /></figure>
                            </div>
                            <div class="w-full float-right pl-2 col-span-8 md:col-span-3 md:w-full lg:col-span-3 lg:w-full items-start justify-start">
                                <p className='text-right font-bold text-purple-500'>Featured Project</p>
                                <p className='text-right text-lg font-bold'>Riccardo Giuriola Portfolio</p>
                                <div class="card w-full bg-base-100 shadow-xl mt-2">
                                    <div class="card-body text-right">
                                        <p>A web app my portfolio website. This is my professional carrer portfolio having all details. You can install it as a PWA if your browser does support this feature.</p>
                                    </div>
                                </div>
                                <div className='grid grid-flow-col auto-cols-max mt-2 float-right gap-1'>
                                    <span class="badge">React</span>
                                    <span class="badge">TailwindCSS</span>
                                    <span class="badge">DaisyUI</span>
                                    <span class="badge">Redux</span>
                                </div>
                                <div className='grid grid-flow-col auto-cols-max mt-12'>
                                    <button class="btn btn-circle float-right" onClick={() => window.open("https://github.com/riccardogiuriola/portfolio", "_blank")}>
                                        <Icon name="SiGithub" vendor="ra" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="divider w-full"></div>
                        <h1 class="text-5xl font-bold w-full text-center">So much more to come!</h1>
                        <p className="text-xl text-center">Trying to do better :)</p>
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
))(withRouter(Work));
