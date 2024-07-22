import { constants } from "./index.js";
import { fromJS } from "immutable";
const defaultState = fromJS({
    miningName: "",
});

const reducer = (state = defaultState, action) => {
    if (action.type === constants.SELECT_MINING) {
        console.log("miningName: "+ action.miningName);
        return state.merge({
            miningName: action.miningName,
        });
    }
    return state;
}

export default reducer;