import * as constants from './constants.js';
// import axios from 'axios';
// import { fromJS } from 'immutable';

export const selectMining = (miningName) => {
    return {
        type: constants.SELECT_MINING,
        miningName: miningName
    }
};

export const showPop = () => {
    return {
        type: constants.SHOW_POP,
    }
};
export const hidePop = () => {
    return {
        type: constants.HIDE_POP,
    }
};

export const setChartData = (data) => {
    return {
        type: constants.SET_CHART,
        data: data
    }
};
export const clearChartData = () => {
    return {
        type: constants.CLEAR_CHART,
    }
};


