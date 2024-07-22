import { combineReducers } from "redux-immutable";
import   { reducer as topBarReducer } from  '../components/top_bar/store';
import   { reducer as dashboardBarReducer } from  '../components/dashboard/store';
import   { reducer as mapReducer } from  '../components/map/store';

const reducer = combineReducers({
    topBar: topBarReducer,
    dashboard: dashboardBarReducer,
    map: mapReducer
})

export default reducer;