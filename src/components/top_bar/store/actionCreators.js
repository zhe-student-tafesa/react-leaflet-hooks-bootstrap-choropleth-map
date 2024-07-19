import * as constants from './constants.js';
// import axios from 'axios';
// import { fromJS } from 'immutable';

export const searchFocus = () => {
    return {
        type: constants.SEARCH_FOCUS
    }
};

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});
