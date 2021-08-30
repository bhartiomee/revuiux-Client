import actionTypes from "../../constants/action-types";

const productReviewReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.productReview.REVIEW_RESPONSE_SUCCESS: {
            return {
                ...state,
                productReviewResponse: action.response.data
            }
        }
        case actionTypes.productReview.REVIEW_RESPONSE_FAILURE: {
            return {
                ...state,
                error: action.error
            }
        }
        default:
            return state;
    }
}

export default productReviewReducer;
