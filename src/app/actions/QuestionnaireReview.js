import { push } from "connected-react-router";
import actionTypes from "../../constants/action-types";
import { questionnaireReviewService } from "../services/QuestionnaireReview.service";
import QuestionnaireActions from "./questionnaire";
import loaderActions from "./loader";
import PATHS from "../../routes/routes-path";

const questionnaireReviewSuccess = (questionRespnse) => ({ type: actionTypes.questionnaireReview.QUESTIONNAIR_REVIEW_SUCCESS, questionRespnse });

const questionnaireReviewFailure = (error) => ({ type: actionTypes.questionnaireReview.QUESTIONNAIR_REVIEW_FAILURE, error });

const createQuestionnaireResponse = (qstResponse, reviewId, productId, next) =>(dispatch)=> {
  dispatch(loaderActions.show());
  questionnaireReviewService.addQuestionnaireReview(qstResponse, reviewId,productId)
    .then(
      (response) => {
        dispatch(questionnaireReviewSuccess(response.data));
        dispatch(push(`${PATHS.resumeReview}${productId}/${reviewId}?wrapper=3`));
        dispatch(loaderActions.hide());
      },
      (error) => {
        dispatch(questionnaireReviewFailure(error & error.message));
        dispatch(loaderActions.hide());
      }
    )
};

const questionnaireReviewDetailsSuccess = response => ({ type: actionTypes.questionnaireReview.QUESTIONNAIRE_REVIEW_DETAIL_SUCCESS, response });

const questionnaireReviewDetailsFailure = error => ({ type: actionTypes.questionnaireReview.QUESTIONNAIRE_REVIEW_DETAIL_ERROR, error });

const getQuestionnaireReviewDetails = reviewId => dispatch => {
  dispatch(loaderActions.show());
  questionnaireReviewService.getQuestionnaireReviewDetails(reviewId)
    .then(
      (response) => {
        dispatch(questionnaireReviewDetailsSuccess(response.data));
        dispatch(loaderActions.hide());
      },
      (error) => {
        dispatch(questionnaireReviewDetailsFailure(error & error.message));
        dispatch(loaderActions.hide());
      }
    )
}

const QuestionniareResponseActions = {
  createQuestionnaireResponse,
  questionnaireReviewSuccess,
  questionnaireReviewFailure,
  getQuestionnaireReviewDetails,
  questionnaireReviewDetailsFailure
}

export default QuestionniareResponseActions;
