/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';

/**
 * Internal Dependencies
 */

/**
 * Component
 */
class Experience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tabId: '1'
        }
    }

    changeTab(id) {
        this.setState({
            tabId: id
        })
    }

    render() {

        const {
            tabId
        } = this.state;

        let experience = '';
        switch (tabId) {
            case '1':
                experience = (
                    <div class="w-full pl-2 col-span-8 md:col-span-5 md:w-full lg:col-span-5 lg:w-full items-start justify-start">
                        <p className="text-lg">Full Stack Developer <a className="text-indigo-500" href="https://sinetinformatica.it" target="_blank">@ Si.net s.r.l</a></p>
                        <p className="text-base">July 2019 - Present</p>
                        <p class="py-0 mt-4">
                            <ul class="menu w-fit text-base rounded-box custom-list">
                                <li className='mb-4'>▹ Developed and shipped the internal management software used for keeping track of employees activities and customers bills. I achieved this using the MERN stack (Mysql, Express, React, Nodejs). It was an highly challenging and important project that schooled me through the path of the Full Stack Developer.</li>
                                <li className='mb-4'>▹ Created a software for a customer that required to handle the queue workflow of a ticketing system. Very useful experience that tought me how to approach the customer directly and remotely. I achieved this using the realtime connection library Socket.io and the MERN stack.</li>
                                <li className='mb-4'>▹ Web App used for the internal scan and validation of the employees Green Pass EU Certificate. This is one of my proudest projects because it was born for internal use due to the COVID emergency and continue even outside the company, having a lots of clients that required this platform. I used React for the frontend and handled the validation through Drupal PHP modules. This was also the first time that i had the opportunity to learn Docker for mass distribution.</li>
                                <li className='mb-4'>▹ Joget plugin for sending SMTP emails through Amazon SES. This was written in Java</li>
                                <li className='mb-4'>▹ QR gerneration library written in PHP that was later used for sending embedded qr at the bottom of automatic company messages.</li>
                                <li className='mb-4'>▹ Website for uploading images including GPS metadata and displaying them on the Open Street Maps service.</li>
                                <li className='mb-4'>▹ Various Python scripts used for different Problem Solving situations.</li>
                            </ul>
                        </p>
                        <div class="divider w-full"></div>
                        <div class="grid grid-cols-2 gap-4">
                            <ul class="menu w-fit text-base rounded-box">
                                <p className="text-lg">Languages</p>
                                <li>▹ JavaScript (ES6+)</li>
                                <li>▹ PHP</li>
                                <li>▹ Python</li>
                                <li>▹ Java</li>
                            </ul>
                            <ul class="menu w-fit text-base rounded-box">
                                <p className="text-lg">Technologies</p>
                                <li>▹ Socket.io</li>
                                <li>▹ Docker</li>
                                <li>▹ MySql</li>
                                <li>▹ Wordpress</li>
                                <li>▹ Redis</li>
                                <li>▹ Redux</li>
                                <li>▹ Linux</li>
                                <li>▹ Amazon AWS</li>
                                <li>▹ Microsoft Azure</li>
                                <li>▹ Git</li>
                            </ul>
                        </div>
                    </div>
                );
                break;
            case '2':
                experience = (
                    <div class="w-full pl-2 col-span-8 md:col-span-5 md:w-full lg:col-span-5 lg:w-full items-start justify-start">
                        <p className="text-lg">SYS Admin <a className="text-indigo-500" href="https://www.mbitsrl.com" target="_blank">@ MBiT s.r.l</a></p>
                        <p className="text-base">March 2018</p>
                        <p class="py-0 mt-4">
                            <ul class="menu w-fit text-base rounded-box custom-list">
                                <li className='mb-4'>▹ This school internship was the one that really interested me the most because introduced me @ Linux in an anterprise way. Installed and configured servers for applications deploy.</li>
                                <li className='mb-4'>▹ PC clients installations with Windows 10 and software bundling using pre-configured ISO</li>
                            </ul>
                        </p>
                        <div class="divider w-full"></div>
                        <div class="grid grid-cols-2 gap-4">
                            <ul class="menu w-fit text-base rounded-box">
                                <p className="text-lg">Technologies</p>
                                <li>▹ Linux Mint</li>
                                <li>▹ Arch Linux</li>
                                <li>▹ Server Configuration & Installation</li>
                                <li>▹ SMB share setup</li>
                                <li>▹ Network Backup cronjob setup</li>
                                <li>▹ Helpdesk</li>
                                <li>▹ PC installations</li>
                            </ul>
                        </div>
                    </div>
                )
                break;
            case '3':
                experience = (
                    <div class="w-full pl-2 col-span-8 md:col-span-5 md:w-full lg:col-span-5 lg:w-full items-start justify-start">
                        <p className="text-lg">Software Developer <a className="text-indigo-500" href="https://www.studioripamonti.it" target="_blank">@ STUDIO RIPAMONTI</a></p>
                        <p className="text-base">March 2017</p>
                        <p class="py-0 mt-4">
                            <ul class="menu w-fit text-base rounded-box custom-list">
                                <li className='mb-4'>▹ Apprentice under a senior software developer. Had the opportunity to understand how a company management software is developed. Everything were compiled using the .NET framework</li>
                            </ul>
                        </p>
                        <div class="divider w-full"></div>
                        <div class="grid grid-cols-2 gap-4">
                            <ul class="menu w-fit text-base rounded-box">
                                <p className="text-lg">Languages</p>
                                <li>▹ C#</li>
                            </ul>
                            <ul class="menu w-fit text-base rounded-box">
                                <p className="text-lg">Technologies</p>
                                <li>▹ NAS backup</li>
                                <li>▹ SQLite</li>
                                <li>▹ .NET</li>
                            </ul>
                        </div>
                    </div>
                )
                break;
            case '4':
                experience = (
                    <div class="w-full pl-2 col-span-8 md:col-span-5 md:w-full lg:col-span-5 lg:w-full items-start justify-start">
                        <p className="text-lg">Information Technology & Programming Class <a className="text-indigo-500" href="https://isisbernocchi.edu.it/" target="_blank">@ ISIS A. Bernocchi</a></p>
                        <p className="text-base">September 2013 - June 2019</p>
                        <p class="py-0 mt-4">
                            <ul class="menu w-fit text-base rounded-box custom-list">
                                <li className='mb-4'>▹ Apprentice under a senior software developer. Had the opportunity to understand how a company management software is developed. Everything were compiled using the .NET framework</li>
                            </ul>
                        </p>
                        <div class="divider w-full"></div>
                        <div class="grid grid-cols-2 gap-4">
                            <ul class="menu w-fit text-base rounded-box">
                                <p className="text-lg">Languages</p>
                                <li>▹ Java</li>
                                <li>▹ PHP</li>
                                <li>▹ C</li>
                            </ul>
                            <ul class="menu w-fit text-base rounded-box">
                                <p className="text-lg">Technologies</p>
                                <li>▹ MySql</li>
                                <li>▹ Java FX</li>
                                <li>▹ SQLite</li>
                                <li>▹ Android Studio</li>
                                <li>▹ Android SDK</li>
                            </ul>
                        </div>
                    </div>
                )
                break;
        }

        return (
            <div class="hero min-h-full bg-base-200">
                <div class="text-left hero-content">
                    <div class="grid grid-rows-1 gap-4 max-w-4xl">
                        <div class="z-10 grid grid-cols-8 gap-4 md:pl-20">
                            <div class="col-span-8">
                                <h1 class="text-3xl sm:text-3xl md:text-5xl lg:text-5xl font-bold w-full">My Journey So Far</h1>
                                <div class="divider w-full"></div>
                            </div>
                            <div class="z-10 col-span-8 md:col-span-3 lg:col-span-3 justify-center items-center">

                                <ul class="menu bg-base-100 w-full rounded-box hidden md:block">
                                    <li className={classnames(tabId == '1' ? 'bordered' : '')}><a name='1' onClick={(e) => this.changeTab(e.target.name)}>Si.net s.r.l</a></li>
                                    <li className={classnames(tabId == '2' ? 'bordered' : '')}><a name='2' onClick={(e) => this.changeTab(e.target.name)}>MBiT s.r.l (Internship)</a></li>
                                    <li className={classnames(tabId == '3' ? 'bordered' : '')}><a name='3' onClick={(e) => this.changeTab(e.target.name)}>STUDIO RIPAMONTI (Internship)</a></li>
                                    <li className={classnames(tabId == '4' ? 'bordered' : '')}><a name='4' onClick={(e) => this.changeTab(e.target.name)}>ISIS A. Bernocchi (Graduation)</a></li>
                                </ul>

                                <div class="tabs mb-6 visible md:hidden lg:hidden  justify-center items-center">
                                    <a className={classnames('tab tab-bordered', tabId == '1' ? 'tab-active' : '')} name='1' onClick={(e) => this.changeTab(e.target.name)}>Si.net</a>
                                    <a className={classnames('tab tab-bordered', tabId == '2' ? 'tab-active' : '')} name='2' onClick={(e) => this.changeTab(e.target.name)}>MBiT</a>
                                    <a className={classnames('tab tab-bordered', tabId == '3' ? 'tab-active' : '')} name='3' onClick={(e) => this.changeTab(e.target.name)}>STUDIO RIPAMONTI</a>
                                    <a className={classnames('tab tab-bordered', tabId == '4' ? 'tab-active' : '')} name='4' onClick={(e) => this.changeTab(e.target.name)}>ISIS A. Bernocchi</a>
                                </div>
                            </div>

                            {experience}
                        </div>
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
