/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

/**
 * Component
 */
class Content extends Component {
    render() {
        return (
            <Fragment>
                <div className='grid grid-rows-2'>
                    <p className="display-4 mb-30">Page Not Found</p>
                    <Link to="/" className="z-20 btn btn-brand">Back Home</Link>
                </div>
            </Fragment>
        );
    }
}

export default Content;
