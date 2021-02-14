import * as ActionTypes from "./ActionTypes";


export const CommentsReducer = (
    state = {
        errMess: null,
        comments: []
    },
    action
) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            let comment = action.payload;
            console.log("CommentReducer: ", comment);
            return {
                ...state,
                comments: state.comments.concat(comment)
            };

        case ActionTypes.ADD_COMMENTS:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                comments: action.payload
            };

        case ActionTypes.COMMENTS_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
                comments: []
            };

        default:
            return state;
    }
}