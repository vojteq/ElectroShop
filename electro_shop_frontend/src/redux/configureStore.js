import {initialState, Reducer} from "./reducer";
import {combineReducers, createStore} from 'redux'
import {Products} from "./products";
import {Comments} from "./comments";
import {Promotions} from "./promotions";
import {Leaders} from "./leaders";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            products: Products,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );

    return store;
}