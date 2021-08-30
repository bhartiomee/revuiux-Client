
import actionTypes from "../../constants/action-types";

const reviewReducer = (state = {}, action) => {
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
    default:
      return state;
  }
}

export default reviewReducer;

