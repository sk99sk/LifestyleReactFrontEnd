import {createStore,combineReducers, applyMiddleware} from "redux";
import {productListReducer} from "./reducers/productReducers";

import thunk from "redux-thunk";
import { compose } from "redux";


const initailState = {};
const reducer = combineReducers({
    productList : productListReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initailState, composeEnhancer(applyMiddleware(thunk)));

export default store;

