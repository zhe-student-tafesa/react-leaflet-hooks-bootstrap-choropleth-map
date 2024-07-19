import { combineReducers } from "redux-immutable";
import   { reducer as topBarReducer } from  '../components/top_bar/store';

const reducer = combineReducers({
    topBar: topBarReducer
})

export default reducer;