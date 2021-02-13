import {COMMENTS} from "../shared/comments";
import * as ActionTypes from "./ActionTypes";


export const CommentsReducer = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log("CommentReducer: ", comment);
            return state.concat(comment)

        default:
            return state;
    }
}