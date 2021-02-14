import {applyMiddleware, combineReducers, createStore} from "redux"
import {ProductsReducer} from "./products";
import {CommentsReducer} from "./comments";
import {LeadersReducer} from "./leaders";
import thunk from "redux-thunk"
import logger from "redux-logger"
import {createForms} from "react-redux-form";
import {InitialFeedback} from "./forms";
import {PromotionsReducer} from "./promotions";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            products: ProductsReducer,
            comments: CommentsReducer,
            promotions: PromotionsReducer,
            leaders: LeadersReducer,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}