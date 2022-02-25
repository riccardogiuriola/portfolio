import './style.scss';

/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Internal Dependencies
 */

/**
 * Component
 */
class Credits extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: false
        };
    }

    closeModal() {
        this.setState({
            status: false
        }, () => this.props.closeCredits())
    }

    componentDidUpdate(prevProps) {
        if (prevProps.creditsStatus !== this.props.creditsStatus) {
            this.setState({
                status: this.props.creditsStatus
            })
        }
    }

    render() {

        const {
            status
        } = this.state;

        return (
            <>
                <input type="checkbox" id="my-modal" class="modal-toggle" checked={status} />
                <div class="modal">
                    <div class="modal-box rounded-md h-screen">
                        <div class="fixed top-0 right-0 mt-2 mr-2">
                            <label for="my-modal" class="btn btn-xs" onClick={() => this.closeModal()}>x</label>
                        </div>
                        <h3 class="font-bold text-lg">Acknowledgements</h3>
                        <p class="py-4">These open source libraries were used to develop this portfolio:</p>
                        <div class="end-credits">
                            <dl class="text-gray-100">
                                <dt>@fortawesome/fontawesome-svg-core</dt>
                                <dt>@fortawesome/free-brands-svg-icons</dt>
                                <dt>@fortawesome/free-regular-svg-icons</dt>
                                <dt>@fortawesome/free-solid-svg-icons</dt>
                                <dt>@fortawesome/react-fontawesome</dt>
                                <dt>@testing-library/jest-dom</dt>
                                <dt>@testing-library/react</dt>
                                <dt>@testing-library/user-event</dt>
                                <dt>change-case</dt>
                                <dt>daisyui</dt>
                                <dt>jquery</dt>
                                <dt>js-cookie</dt>
                                <dt>object.omit</dt>
                                <dt>react</dt>
                                <dt>react-dom</dt>
                                <dt>react-feather</dt>
                                <dt>react-icons</dt>
                                <dt>react-loadable</dt>
                                <dt>react-redux</dt>
                                <dt>react-router-dom</dt>
                                <dt>react-scripts</dt>
                                <dt>react-scroll</dt>
                                <dt>react-tsparticles</dt>
                                <dt>reactstrap</dt>
                                <dt>redux</dt>
                                <dt>sass</dt>
                                <dt>styled-components</dt>
                                <dt>typewriter-effect</dt>
                                <dt>web-vitals</dt>
                                <dt>workbox-background-sync</dt>
                                <dt>workbox-broadcast-update</dt>
                                <dt>workbox-cacheable-response</dt>
                                <dt>workbox-core</dt>
                                <dt>workbox-expiration</dt>
                                <dt>workbox-google-analytics</dt>
                                <dt>workbox-navigation-preload</dt>
                                <dt>workbox-precaching</dt>
                                <dt>workbox-range-requests</dt>
                                <dt>workbox-routing</dt>
                                <dt>workbox-strategies</dt>
                                <dt>workbox-streams</dt>
                            </dl>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default connect(({ settings }) => (
    {
        settings
    }
))(withRouter(Credits));
