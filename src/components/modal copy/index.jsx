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
class Modal extends Component {
    constructor(props) {
        super(props);
    }

    showURL(url) {
        window.open(url, '_blank').focus()
        this.props.closeModal();
    }

    render() {

        const {
            title,
            body,
            url
        } = this.props;

        return (
            <>
                <input type="checkbox" id="my-modal" class="modal-toggle hidden" checked={true} />
                <div class="modal">
                    <div class="modal-box">
                        <h3 class="font-bold text-lg">{title}</h3>
                        <p class="py-4">{body}</p>
                        <div class="modal-action">
                            <label for="my-modal" class="btn" onClick={() => this.showURL(url)}>Understood!</label>
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
))(withRouter(Modal));
