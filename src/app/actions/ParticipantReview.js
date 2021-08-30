import { push } from "connected-react-router";
import actionTypes from "../../constants/action-types";
import { participantReviewService } from "../services/ParticipantReview.service";
import loaderActions from "./loader"
import PATHS from "../../routes/routes-path";

const reviewSuccess = response => ({ type: actionTypes.participantReview.PARTICIPANT_ADD_REVIEW_SUCCESS, response });

const reviewFailure = error => ({ type: actionTypes.participantReview.PARTICIPANT_ADD_REVIEW_FAILURE, error });

const createReview = (productId) => (dispatch) => {
  dispatch(loaderActions.show());
  participantReviewService.addProductReview(productId)
    .then(
      (response) => {
        dispatch(reviewSuccess(response));
        dispatch(push(`${PATHS.resumeReview}${productId}/${response.id}?wrapper=2`));
        dispatch(loaderActions.hide());
      },
      (error) => {
        dispatch(reviewFailure(error && error.message));
        dispatch(loaderActions.hide());
      }
    );
}

const productReviewListSuccess = response => ({ type: actionTypes.participantReview.PRODUCT_REVIEW_LIST_SUCCESS, response });

const productReviewListFailure = error => ({ type: actionTypes.participantReview.PRODUCT_REVIEW_LIST_FAILURE, error });

const getProductReviewList = (status) => (dispatch) => {
  dispatch(loaderActions.show());
  participantReviewService.getProductReviewList(status).then(
    (response) => {
      dispatch(productReviewListSuccess(response.data));
      dispatch(loaderActions.hide());
    },
    (error) => {
      dispatch(productReviewListFailure(error && error.message));
      dispatch(loaderActions.hide());
    }
  )

}

const participantReviewActions = {
  reviewSuccess,
  reviewFailure,
  createReview,
  getProductReviewList
}

export default participantReviewActions;
