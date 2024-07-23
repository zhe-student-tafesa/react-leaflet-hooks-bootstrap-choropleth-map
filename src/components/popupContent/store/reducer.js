import { constants } from "./index.js";
import { fromJS } from "immutable";
const defaultState = fromJS({
    miningName: "",
    showPopup: false,
    chartData: []
});

const reducer = (state = defaultState, action) => {
    if (action.type === constants.SELECT_MINING) {
        //console.log("miningName: "+ action.miningName);
        return state.merge({
            miningName: action.miningName,
        });
    }
    if (action.type === constants.SHOW_POP) {
        return state.merge({
            showPopup: true
        });
    }
    if (action.type === constants.HIDE_POP) {
        return state.merge({
            showPopup: false
        });
    }
    if (action.type === constants.SET_CHART) {
        return state.merge({
            chartData: fromJS(action.data)
        });
    }
    if (action.type === constants.CLEAR_CHART) {
        return state.merge({
            chartData: []
        });
    }

    return state;
}

export default reducer;