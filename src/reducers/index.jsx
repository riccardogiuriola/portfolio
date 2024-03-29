/**
 * External Dependencies
 */
import { combineReducers } from 'redux';
import Omit from 'object.omit';

/**
 * Internal Dependencies
 */
import { getUID } from '../utils';
import defaultSettings from '../settings';
import {
    UPDATE_SETTINGS,
    ADD_TOAST,
    REMOVE_TOAST,
} from '../actions';

// initial state.
const INITIAL_SETTINGS_STATE = {
    ...defaultSettings,
};
const INITIAL_TOASTS_STATE = [];

/**
 * Reducer
 */
const rootReducer = combineReducers({
    settings: (state = INITIAL_SETTINGS_STATE, action) => {
        switch (action.type) {
            case UPDATE_SETTINGS:
                return Object.assign({}, state, action.settings);
            default:
                return state;
        }
    },
    toasts: (state = INITIAL_TOASTS_STATE, action) => {
        switch (action.type) {
            case ADD_TOAST:
                const newData = {
                    ...{
                        title: '',
                        content: '',
                        color: 'brand',
                        time: false,
                        duration: 0,
                        closeButton: true,
                    },
                    ...action.data,
                };

                if (newData.time === true) {
                    newData.time = new Date();
                }

                return {
                    ...state,
                    [getUID()]: newData,
                };
            case REMOVE_TOAST:
                if (!action.id || !state[action.id]) {
                    return state;
                }
                return Omit(state, action.id);
            default:
                return state;
        }
    },
});

export default rootReducer;
