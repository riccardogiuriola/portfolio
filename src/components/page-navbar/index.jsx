import './style.scss';

/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-scroll';
import classnames from "classnames";

/**
 * Internal Dependencies
 */
import Icon from '../icon';

/**
 * Component
 */
class PageNavbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true
        };
    }

    loadSocials() {
        const {
            settings,
        } = this.props;

        let socials = [];
        for (const element of settings.navigation) {
            socials.push(
                <div class="dropdown dropdown-end w-full">
                    <label tabindex="0" class="btn btn-ghost w-full">
                        <Link
                            to={element.id}
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <Icon name={element.icon} style={{ margin: 'auto', width: '50%', marginBottom: "5px" }} />
                            {element.name}
                        </Link>
                    </label>
                </div>
            );
        }
        this.setState({
            socials: socials
        })
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
        this.loadSocials();
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    render() {

        const {
            socials
        } = this.state;

        return (
            <>
                <div className={classnames("z-10 navbar fixed bg-base-100 shadow-xl rounded-xl w-min float-right right-0 mt-4 mr-4 invisible md:visible lg:visible", { "navbar--hidden": !this.state.visible })}>
                    <div class="flex-none w-full pl-2 pr-2">
                        {socials}
                        <button class="btn ml-2 mr-2">Resume</button>
                        <button class="btn">Credits</button>
                    </div>
                </div>

                <div className={classnames("z-10 navbar fixed bg-base-100 mb-40 shadow-xl rounded-xl sm:visible md:invisible lg:invisible", { "navbar--hidden": !this.state.visible })}>
                    <div class="navbar-start">
                        <a>asdsad</a>
                    </div>
                    <div class="navbar-end">
                        <label class="btn btn-ghost btn-circle">
                            <Icon name={["far", "bars-sort"]} vendor="fa" />
                        </label>
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
))(withRouter(PageNavbar));
