import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducer from './reducer.js';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer
    , composeEnhancers(
    applyMiddleware(thunk)
)
);

export default store;