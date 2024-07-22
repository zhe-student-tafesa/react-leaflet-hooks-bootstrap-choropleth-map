import { combineReducers } from "redux-immutable";
import   { reducer as topBarReducer } from  '../components/top_bar/store';
import   { reducer as dashboardBarReducer } from  '../components/dashboard/store';

const reducer = combineReducers({
    topBar: topBarReducer,
    dashboard: dashboardBarReducer,
})

export default reducer;