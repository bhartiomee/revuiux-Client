import baseService from "./base.service"
import URLS from "../../constants/api-urls"

const addProductReview = (productId) => {
  return baseService.makeApiCall(URLS.addReview(productId), {}, 'POST')
  .then(response=>response)
}

const getProductReviewList = (status) => {
  return baseService.makeApiCall(URLS.getProductReviewList, { status })
  .then(reviewList=>reviewList)
}

export const participantReviewService = {
  addProductReview,
  getProductReviewList
}
