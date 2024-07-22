import { combineReducers } from "redux-immutable";
import   { reducer as topBarReducer } from  '../components/top_bar/store';
import   { reducer as dashboardBarReducer } from  '../components/dashboard/store';
import   { reducer as mapReducer } from  '../components/map/store';
import   { reducer as popReducer } from  '../components/popupContent/store';

const reducer = combineReducers({
    topBar: topBarReducer,
    dashboard: dashboardBarReducer,
    map: mapReducer,
    popupContent: popReducer,
})

export default reducer;