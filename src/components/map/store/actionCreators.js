import * as constants from './constants.js';
// import axios from 'axios';
// import { fromJS } from 'immutable';

export const selectCountry = (countryName, fullName, salesData) => {
    return {
        type: constants.SELECT_COUNTRY,
        selectedCountry: countryName,
        fullName: fullName,
        salesData: salesData
    }
};

