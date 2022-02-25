import './style.scss';

/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classnames from "classnames";

/**
 * Internal Dependencies
 */

/**
 * Component
 */
class PageLogo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true,
            theme: 'dark'
        };
    }

    handleScroll = () => {
        const { prevScrollpos } = this.state;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;

        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.settings.theme !== this.props.settings.theme) {
            this.setState({
                theme: this.props.settings.theme
            })
        }
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    render() {

        const {
            theme
        } = this.state;

        return (
            <>
                <div className={classnames("z-10 navbar fixed bg-base-100 shadow-xl rounded-xl w-min float-left left-4 mt-4 mr-4 invisible md:visible lg:visible", { "navbar--hidden": !this.state.visible })}>
                    <div class="w-16 p-1">
                        <img src={"images/rg_logo_" + theme + ".png"} alt="logo" />
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
))(withRouter(PageLogo));
