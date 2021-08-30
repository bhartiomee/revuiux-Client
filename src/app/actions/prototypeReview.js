import { push } from "connected-react-router";
import actionTypes from "../../constants/action-types";
import { productReviewService } from "../services/productReview.service";
import { prototypeReviewService } from "../services/prototypReview.service";
import loaderActions from "./loader";

const prototypeReviewSuccess = prototypeResponse => ({ type: actionTypes.prototypeReview.PROTOTYPE_SUBMIT_REVIEW_SUCCESS, prototypeResponse });

const prototypeReviewFailure = error => ({ type: actionTypes.prototypeReview.PROTOTYPE_SUBMIT_REVIEW_FAILURE, error });

const clearPrototypeResponse = () => ({ type: actionTypes.CLEAR_PROTOTYPE_RESPONSE_LIST })

const reviewStatusUpdateSucess = response => ({ type: actionTypes.participantReview.REVIEW_STATUS_UPDATE_SUCCESS, response });

const reviewStatusUpdateFailure = error => ({ type: actionTypes.participantReview.REVIEW_STATUS_UPDATE_FAILURE, error });

const submitPrototypeResponse = (prototypeResponse, reviewId, productId, next) => (dispatch) => {
  dispatch(loaderActions.show());
  prototypeReviewService.addPrototypeReview(prototypeResponse, reviewId, productId).
    then(
      (response) => {
        dispatch(prototypeReviewSuccess(response.data));
        dispatch(push);
        dispatch(loaderActions.hide());
      },
      (error) => {
        dispatch(prototypeReviewFailure(error && error.message));
        dispatch(loaderActions.hide());
      }
    )
    productReviewService.updateReviewedStatus(reviewId)
    .then(
      (response)=>{
        dispatch(reviewStatusUpdateSucess());
        loaderActions.hide();
      },
      (error)=>{
        dispatch(reviewStatusUpdateFailure(error&error.message));
        loaderActions.hide();
      }
    )
}

const prototypeResponseSuccess = response => ({ type: actionTypes.prototypeReview.PROTOTYPE_RESPONSE_SUCCESS, response });

const prototypeResponseFailure = error => ({ type: actionTypes.prototypeReview.PROTOTYPE_RESPONSE_FAILURE, error });

const getPrototypeResponse = reviewId => dispatch => {
  dispatch(loaderActions.show());
  prototypeReviewService.getPrototypeResponse(reviewId).then(
    (response) => {
      dispatch(prototypeResponseSuccess(response.data));
      dispatch(loaderActions.hide());
    },
    (error) => {
      dispatch(prototypeResponseFailure(error && error.message));
      dispatch(loaderActions.hide());
    }
  )
}

const PrototypeResponseActions = {
  submitPrototypeResponse,
  prototypeReviewSuccess,
  prototypeReviewFailure,
  clearPrototypeResponse,
  getPrototypeResponse,
  reviewStatusUpdateFailure,
  reviewStatusUpdateSucess
}

export default PrototypeResponseActions;
