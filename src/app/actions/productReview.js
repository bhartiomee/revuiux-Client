import loaderActions from "./loader";
import { productReviewService } from "../services/productReview.service";
import productActions from "./product";
import actionTypes from "../../constants/action-types";

const getResearcherProductReviewList = isReviewed => (dispatch) => {
    dispatch(loaderActions.show());
    productReviewService.getResearcherProductReviewList(isReviewed)
        .then(
            (response) => {
                dispatch(productActions.listSuccess(response));
                dispatch(loaderActions.hide());
            },
            (error) => {
                dispatch(productActions.listFailure(error && error.message));
                dispatch(loaderActions.hide());
            }
        )
}

const productReviewResponseSuccess = response => ({ type: actionTypes.productReview.REVIEW_RESPONSE_SUCCESS, response });

const productReviewResponseFailure = response => ({ type: actionTypes.productReview.REVIEW_RESPONSE_FAILURE });


const getProductReviewResponse = productId => (dispatch) => {
    dispatch(loaderActions.show());
    productReviewService.getProductReviewResponse(productId)
        .then(
            (response) => {
                dispatch(productReviewResponseSuccess(response));
                dispatch(loaderActions.hide());
            },
            (error) => {
                dispatch(productReviewResponseFailure(error && error.message));
                dispatch(loaderActions.hide());
            }
        )
}

const productReviewActions = {
    getResearcherProductReviewList,
    getProductReviewResponse
}

export default productReviewActions;
