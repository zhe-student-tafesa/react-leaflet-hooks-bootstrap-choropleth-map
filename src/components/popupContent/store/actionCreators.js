import * as constants from './constants.js';
// import axios from 'axios';
// import { fromJS } from 'immutable';

export const selectMining = (miningName) => {
    return {
        type: constants.SELECT_MINING,
        miningName: miningName
    }
};

