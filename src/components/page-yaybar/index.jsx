/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Internal Dependencies
 */
import Icon from '../../components/icon';
import { updateSettings as actionUpdateSettings } from '../../actions';
import Modal from '../modal';

/**
 * Component
 */
class PageYaybar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: true,
            yaybar: [],
            //modal
            title: 'This repository is no longer maintained',
            body: 'This GitLab account must be considered as an archive, because these projects where made over 5 years ago and do not represent my currently upgraded programming skills :)',
            enabled: false,
            url: ''
        }
        this.closeModal = this.closeModal.bind(this);
    }

    setSection(section) {
        const {
            updateSettings
        } = this.props;

        updateSettings({
            section: section
        });
    }

    showWarning(element) {
        if (element.name == "GitLab") {
            this.setState({
                enabled: true,
                url: element.url
            })
        } else {
            window.open(element.url, '_blank').focus()
        }
    }

    closeModal() {
        this.setState({
            enabled: false
        })
    }

    loadYaybar() {
        const {
            settings,
        } = this.props;

        let yaybar = [];
        for (const element of settings.socials) {
            yaybar.push(
                <li>
                    <a onClick={() => this.showWarning(element)}><Icon name={element.icon} vendor={element.vendor} /></a>
                </li>
            );
        }
        this.setState({
            yaybar: yaybar
        })
    }

    componentDidMount() {
        this.loadYaybar();
    }

    render() {

        const {
            checked,
            yaybar,

            //modal
            title,
            body,
            enabled,
            url
        } = this.state;

        return (
            <>
                {
                    enabled ? (
                        <Modal title={title} body={body} url={url} closeModal={this.closeModal} />
                    ) : ''
                }
                <div class="z-10 shadow bg-base-100 drawer w-16 ml-4 h-min m-0 top-2/4 -translate-y-2/4 fixed rounded-xl invisible md:visible lg:visible">
                    <input id="my-drawer" type="checkbox" class="drawer-toggle" checked={checked} />
                    <div class="drawer-side">
                        <label for="my-drawer" class="md:drawer-overlay"></label>
                        <ul class="menu pt-4 pb-4 p-0 overflow-y-auto w-16 bg-base-100 rounded-xl text-base-content flex items-center justify-center">
                            {yaybar}
                        </ul>
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
), { updateSettings: actionUpdateSettings })(withRouter(PageYaybar));
