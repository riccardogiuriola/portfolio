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
import Drawer from '../drawer';
import Credits from '../credits';
import { updateSettings as actionUpdateSettings } from '../../actions';

/**
 * Component
 */
class PageNavbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true,
            theme: 'dark',
            drawer_status: false,
            navbar_status: false,
            credits_status: false
        };
        this.closeNavbar = this.closeNavbar.bind(this);
        this.closeCredits = this.closeCredits.bind(this);
    }

    loadNavbar() {
        const {
            settings,
        } = this.props;

        let navbar = [];
        for (const element of settings.navigation) {
            navbar.push(
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
            navbar: navbar
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
        this.loadNavbar();
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

    drawerStatus() {
        const {
            updateSettings
        } = this.props;

        this.setState({
            drawer_status: !this.state.drawer_status,
            navbar_status: !this.state.navbar_status
        }, () => updateSettings({
            overlay: this.state.drawer_status
        }))
    }

    creditsStatus() {
        this.setState({
            credits_status: !this.state.credits_status
        })
    }

    closeNavbar() {
        const {
            updateSettings
        } = this.props;

        this.setState({
            navbar_status: false,
            drawer_status: false
        }, () => updateSettings({
            overlay: this.state.drawer_status
        }))
    }

    closeCredits() {
        this.setState({
            credits_status: false
        })
    }

    render() {

        const {
            navbar,
            theme,
            drawer_status,
            navbar_status,
            credits_status
        } = this.state;

        return (
            <>
                <Drawer status={drawer_status} closeNavbar={this.closeNavbar} />
                <Credits creditsStatus={credits_status} closeCredits={this.closeCredits} />
                <div className={classnames("z-10 navbar fixed bg-base-100 shadow-xl rounded-xl w-min float-right right-0 mt-4 mr-4 invisible md:visible lg:visible", { "navbar--hidden": !this.state.visible })}>
                    <div class="flex-none w-full pl-2 pr-2">
                        {navbar}
                        <button class="btn" onClick={() => this.creditsStatus()}>Credits</button>
                    </div>
                </div>

                <div className={classnames("z-10 navbar fixed bg-base-100 mb-40 shadow-xl rounded-xl sm:visible md:invisible lg:invisible", { "navbar--hidden": !this.state.visible })}>
                    <div class="navbar-start pl-2">
                        <img className='w-12' src={"images/rg_logo_" + theme + ".png"} alt="logo" />
                    </div>
                    <div class="navbar-center">
                        <p className='text-lg'>MyPortfolio</p>
                    </div>
                    <div class="navbar-end">
                        <label class="btn btn-circle swap swap-rotate" >
                            <input type="checkbox" onClick={() => this.drawerStatus()} checked={navbar_status} />
                            <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                            <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
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
), { updateSettings: actionUpdateSettings })(withRouter(PageNavbar));
