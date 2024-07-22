import * as constants from './constants.js';
import axios from 'axios';
// import { fromJS } from 'immutable';
import countries from "../../../data/countries.json";
import legendItems from '../../../entities/LegendItems.js';

const changeCountries = (data) => {
    return {
        type: constants.CHANGR_COUNTRIES,
        data: data
    }
}

const endLoading = () => {
    return {
        type: constants.END_LOADING,
    }
}

export const getCountriesProfit = (countryName) => {
    return (dispatch) => {
        axios.get('/api/countriesProfit.json').then((res) => {
            const data = res.data.data;
            //console.log(data);
            processProfitData(data.countriesProfitList);
            // save countries.features using action
            //console.log(countries.features);
            const action = changeCountries(countries.features);
            dispatch(action);
            const actionEndLoading = endLoading();
            dispatch(actionEndLoading);

        }).catch((error) => {
            console.log(error);
        });
    }
    // return {
    //     type: constants.GET_COUNTRIES_PROFIT

    // }
};

const processProfitData = (profitCountries) => {
    // use mock data set Geo's country

    for (let i = 0; i < countries.features.length; i++) {
        const country = countries.features[i];
        const profitCountry = profitCountries.find(
            (profitCountry) => country.properties.ISO_A3 === profitCountry.name
        );

        country.properties.confirmed = 0;
        country.properties.confirmedText = 0;
        country.properties.salesData = null;

        // use mock data set Geo's country

        if (profitCountry != null) {
            let confirmed = Number(profitCountry.Confirmed);
            country.properties.confirmed = confirmed;
            country.properties.confirmedText = formatNumberWithCommas(
                confirmed
            );
            // use mock data to set country
            country.properties.salesData = profitCountry.data;

        }
        setCountryColorAccordingProfit(country);
    }

    // this.setState(countries.features);
};

const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const setCountryColorAccordingProfit = (country) => {
    // use isFor function and confirmed: get according legendItem
    const legendItem = legendItems.find((item) =>
        item.isFor(country.properties.salesData != null)
    );
    // use legendItem.color set Geo's country'color
    // use legendItem.color set Geo's country'color
    // use legendItem.color set Geo's country'color
    if (legendItem != null) {
        country.properties.color = legendItem.color;
    }
}

