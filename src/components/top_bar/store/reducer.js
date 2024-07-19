import { constants } from "./index.js";
const defaultState = {
    focused: false
};

const reducer = (state = defaultState, action) => {
    if (action.type === constants.SEARCH_FOCUS) {
        return {
            focused: true
        };
    }
    // search_blur
    if (action.type === constants.SEARCH_BLUR) {
        return {
            focused: false
        };
    }
    return state;
}

export default reducer;