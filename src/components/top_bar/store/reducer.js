import { constants } from "./index.js";
import { fromJS } from "immutable";
const defaultState = fromJS({
    focused: false
});

const reducer = (state = defaultState, action) => {
    if (action.type === constants.SEARCH_FOCUS) {
        return state.set('focused', true);
    }
    // search_blur
    if (action.type === constants.SEARCH_BLUR) {
        return state.set('focused', false);
    }
    return state;
}

export default reducer;