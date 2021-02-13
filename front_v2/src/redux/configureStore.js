import {combineReducers, createStore} from "redux"
import {ProductsReducer} from "./products";
import {CommentsReducer} from "./comments";
import {LeadersReducer} from "./leaders";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            products: ProductsReducer,
            comments: CommentsReducer,
            promotions: ProductsReducer,
            leaders: LeadersReducer
        })
    );

    return store;
}