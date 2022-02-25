/**
 * External Dependencies
 */
import React, { Component } from 'react';

/**
 * Internal Dependencies
 */
import AsyncComponent from '../../components/async-component';

/**
 * Component
 */
class Homepage extends Component {
    render() {
        return (
            <AsyncComponent component={() => import('./content')} />
        );
    }
}

export default Homepage;
