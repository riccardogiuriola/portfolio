import './style.scss';

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
class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div class="hero min-h-screen bg-base-200">
                <div class="text-left hero-content">
                    <div class="grid grid-rows-1 gap-4 max-w-4xl">
                        <div class="grid grid-cols-8 gap-4 md:pl-20">
                            <div class="col-span-8">
                                <h1 class="text-5xl font-bold w-full">About Me</h1>
                                <div class="divider w-full"></div>
                            </div>
                            <div class="col-span-8 md:col-span-5 lg:col-span-5 justify-center items-center">
                                <p class="py-0">
                                    Hello! I'm Riccardo, a software developer based in Milan, Italy who enjoys building things that live on the internet.
                                    I develop websites and web apps utilizing the latest javascript technologies available.<br /><br />
                                    Shortly after graduating from ISIS A. Bernocchi, I started my journey into the tech industry joining the developers team in Si.net, learning popular frameworks such as React.<br /><br />
                                    In my free time i like to learn about new upcoming technologies. I'm also a Cyber Security enthusiast as you can see from my <a className="text-indigo-500" href="https://tryhackme.com/p/razor99" target="_blank">TryHackMe Profile</a>. Also a reverse engineering lover using languages like C++ for handling system calls and memory reading/writing. Used software like OllyDBG or x64DBG for mapping various softwares like CS:GO and other games for exploiting them (Check my GitLab if you want to know more).<br /><br />
                                    Here are a few technologies I've been working with recently:
                                </p>
                                <div class="grid grid-cols-2 gap-4">
                                    <ul class="menu w-fit text-secondary-content p-2 rounded-box">
                                        <li>▹ JavaScript (ES6+)</li>
                                        <li>▹ React</li>
                                        <li>▹ Node.js</li>
                                        <li>▹ Express.js</li>
                                        <li>▹ Socket.Io</li>
                                        <li>▹ Python</li>
                                    </ul>
                                    <ul class="menu w-fit text-secondary-content p-2 rounded-box">
                                        <li>▹ HTML & (S)CSS</li>
                                        <li>▹ Mysql</li>
                                        <li>▹ MongoDB</li>
                                        <li>▹ Redis</li>
                                        <li>▹ Docker</li>
                                        <li>▹ Linux</li>
                                    </ul>
                                </div>
                            </div>
                            <figure class="w-3/6 m-auto col-span-8 md:col-span-3 md:w-full lg:col-span-3 lg:w-full items-start justify-start profile-pic"><img className='rounded-lg' src="/images/profile_pic.jpg" alt="Shoes" /></figure>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default connect(({ settings }) => (
    {
        settings
    }
))(withRouter(About));
