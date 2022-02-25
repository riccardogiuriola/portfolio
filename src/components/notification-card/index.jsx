/**
 * Styles
 */
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
import Icon from '../icon';
import { updateAuth as actionUpdateAuth } from '../../actions';

/**
 * Component
 */
class NotificationCard extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {

        const {
            status = false
        } = this.props;

        return (
            <div class="drawer drawer-end absolute h-min w-max float-right right-0 mr-4 mt-24">
                <input id="my-drawer-4" type="checkbox" class="drawer-toggle" checked={status} />
                <div class="drawer-side rounded-xl overflow-x-hidden">
                    <label for="my-drawer-4" class="drawer-overlay"></label>
                    <ul class="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>

                    </ul>
                </div>
            </div>
        );
    }
}

export default connect(({ auth, settings }) => (
    {
        auth,
        settings
    }
))(withRouter(NotificationCard));
