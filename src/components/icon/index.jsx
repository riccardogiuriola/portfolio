/**
 * External Dependencies
 */
import React from 'react';
import * as FeatherIcons from 'react-feather';

import * as far from '@fortawesome/free-regular-svg-icons';
import * as fas from '@fortawesome/free-solid-svg-icons';
import * as fab from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as changeCase from 'change-case';

import { IconContext } from "react-icons";
import * as SimpleIcons from "react-icons/si";

const faLib = {
    far,
    fas,
    fab,
};

/**
 * Component
 *
 * @param {Object} props component props.
 * @return {Object} component.
 */
const Icon = (props) => {
    const {
        vendor = 'feather',
    } = props;

    let {
        name,
    } = props;

    let result = '';

    const opts = {
        ...props,
    };
    delete opts.vendor;

    opts.className = `${(opts.className || '')} rui-icon`;

    // Feather.
    if ('feather' === vendor) {
        name = changeCase.pascalCase(name);

        if (!FeatherIcons[name]) {
            name = 'AlertTriangle';
        }

        const RenderIcon = FeatherIcons[name];

        result = <RenderIcon {...opts} strokeWidth="1.5" />;
    }

    // FontAwesome.
    if ('fa' === vendor) {
        let icon = '';
        let lib = 'fas';

        if (Array.isArray(name)) {
            lib = name[0];
            name = name[1];
        }

        name = `fa${changeCase.pascalCase(name)}`;

        if (faLib[lib] && faLib[lib][name]) {
            icon = faLib[lib][name];
        }

        result = icon ? <FontAwesomeIcon {...opts} icon={icon} size="xl" color="white" /> : '';
    }

    // ReactIcons.
    if ('ra' === vendor) {

        let Icon = SimpleIcons[name];

        result = name ?
            <IconContext.Provider value={{ size: '2em', className: "global-class-name" }}>
                <div>
                    <Icon />
                </div>
            </IconContext.Provider> : '';
    }

    return result;
};

export default Icon;
