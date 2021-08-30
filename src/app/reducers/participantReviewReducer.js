
import actionTypes from "../../constants/action-types";

const participantReviewReducer = (state = {}, action) => {
switch (action.type) {
    case actionTypes.participantReview.PARTICIPANT_ADD_REVIEW_SUCCESS: {
        return {
            ...state,
            reviewId: action.response.id
        }
    }
    case actionTypes.participantReview.PARTICIPANT_ADD_REVIEW_FAILURE: {
        return {
            ...state,
            error: action.error
        }
    }
    case actionTypes.participantReview.PRODUCT_REVIEW_LIST_SUCCESS: {
        return {
            ...state,
            productReviewList: action.response
        }
    }
    case actionTypes.participantReview.PRODUCT_REVIEW_LIST_FAILURE: {
        return {
            ...state,
            error: action.error
        }
    }
    case actionTypes.participantReview.REVIEW_STATUS_UPDATE_SUCCESS:{
        return{
            ...state
        }
    }
    case actionTypes.participantReview.REVIEW_STATUS_UPDATE_FAILURE:{
        return{
            ...state,
            error:action.error
        }
    }

    default:
        return state;
    }
}

export default participantReviewReducer;

