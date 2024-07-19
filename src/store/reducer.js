import { combineReducers } from "redux";
import topBarReducer from '../components/top_bar/store/reducer';

export default combineReducers({
    topBar: topBarReducer
})