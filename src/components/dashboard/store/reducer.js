import { constants } from "./index.js";
import { fromJS } from "immutable";
const defaultState = fromJS({
    countriesProfit: [],
    loading: true,
});

const reducer = (state = defaultState, action) => {
    if (action.type === constants.CHANGR_COUNTRIES) {
        return state.set('countriesProfit', fromJS(action.data));
    }
    if (action.type === constants.END_LOADING) {
        return state.set('loading', false);
    }
    return state;
}

export default reducer;