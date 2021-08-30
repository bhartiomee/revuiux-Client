import actionTypes from "../../constants/action-types";

const questionnaireReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.questionnaire.QUESTIONNAIRE_CREATE_SUCCESS: {
      return {
        ...state,
        error: null,
        questionnaireList: action.questions,
      };
    }
    case actionTypes.questionnaire.QUESTIONNAIRE_CREATE_FAILURE: {
      return {
        ...state,
        error: action.error
      };
    }
    case actionTypes.questionnaire.QUESTIONNAIRE_DETAILS_SUCCESS: {
      return {
        ...state,
        questionnaireList: action.response.data
      }
    }
    case actionTypes.questionnaire.QUESTIONNAIRE_DETAILS_FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }

    case actionTypes.questionnaire.CLEAR_QUESTIONNAIRE_LIST:{
      return{
        ...state,
        questionnaireList: []
      }
    }
    default:
      return state;
  }
};

export default questionnaireReducer;
