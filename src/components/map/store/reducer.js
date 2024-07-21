import { constants } from "./index.js";
import { fromJS } from "immutable";
const defaultState = fromJS({
    selectedCountry: ""
});

const reducer = (state = defaultState, action) => {
    if (action.type === constants.SELECT_COUNTRY) {
        return state.set('selectedCountry', action.selectedCountry);
    }
    return state;
}

export default reducer;