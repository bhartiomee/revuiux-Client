import actionTypes from "../../constants/action-types";

const questionnaireReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.questionnaireReview. QUESTIONNAIR_REVIEW_SUCCESS: {
      return {
        ...state,
        error: null,
        questionnaireResponse: action.questions

      }
    }
    case actionTypes.questionnaireReview.QUESTIONNAIR_REVIEW_SUCCESS: {
      return {
        ...state,
        error: action.error,
      }
    }
    case actionTypes.questionnaireReview.CLEAR_QUESTIONNAIR_RESPONSE_LIST: {
      return {
        ...state,
        questionnaireResponse: []
      }
    }
    case actionTypes.questionnaireReview.QUESTIONNAIRE_REVIEW_DETAIL_SUCCESS: {
      return {
        ...state,
        questionnaireResponse: action.response
      }
    }
    case actionTypes.questionnaireReview.QUESTIONNAIRE_REVIEW_DETAIL_FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }
    default:
      return state;
  }
};

export default questionnaireReviewReducer;
