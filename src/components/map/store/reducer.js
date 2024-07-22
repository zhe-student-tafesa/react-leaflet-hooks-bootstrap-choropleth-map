import { constants } from "./index.js";
import { fromJS } from "immutable";
const defaultState = fromJS({
    selectedCountry: "",
    fullName:"", 
    salesData: []

});

const reducer = (state = defaultState, action) => {
    if (action.type === constants.SELECT_COUNTRY) {
        return state.merge({
            selectedCountry: action.selectedCountry,
            fullName: action.fullName,
            salesData: action.salesData,
        });
    }
    return state;
}

export default reducer;