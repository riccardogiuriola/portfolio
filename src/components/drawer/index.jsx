/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-scroll';
import classnames from 'classnames';

/**
 * Internal Dependencies
 */

/**
 * Component
 */
class Drawer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            drawer: <></>
        }
    }

    closeNavbar() {
        this.setState({
            status: false
        }, () => this.props.closeNavbar())
    }

    loadDrawer() {
        const {
            settings,
        } = this.props;

        let drawer = [];
        for (const element of settings.navigation) {
            drawer.push(
                <li>
                    <Link
                        to={element.id}
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick={() => this.closeNavbar()}
                    >
                        {element.name}
                    </Link>
                </li>
            );
        }
        this.setState({
            drawer: drawer
        })
    }

    componentDidMount() {
        this.loadDrawer();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {

        const {
            status,
            drawer
        } = this.state;

        return (
            <div className={classnames("z-10 drawer drawer-end fixed h-min w-max float-right right-0 mr-4 mt-20", status ? "visible" : "hidden")}>
                <input id="my-drawer-4" type="checkbox" class="drawer-toggle" checked={status} />
                <div class="drawer-side rounded-xl overflow-x-hidden">
                    <label for="my-drawer-4" class="drawer-overlay"></label>
                    <ul class="menu p-4 w-80 bg-base-100 text-base-content">
                        {drawer}
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
))(withRouter(Drawer));
