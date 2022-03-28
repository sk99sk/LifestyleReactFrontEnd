import {PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";

function productListReducer(state={products:[],loading:true,error:false},action){

    switch (action.type){
        case PRODUCT_LIST_REQUEST:
            return {products:[],loading:true,error:false};
        case PRODUCT_LIST_SUCCESS:
            return {products:action.payload,loading:false,error:false};
        case PRODUCT_LIST_FAIL:
            return {products:[],loading:false,error:action.payload};
        default:
            return state;

    }
}



export {productListReducer};