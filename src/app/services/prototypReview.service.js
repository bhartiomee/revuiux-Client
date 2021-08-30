import baseService from "./base.service";
import URLS from "../../constants/api-urls";

//service to post prototype reviews from participant
const addPrototypeReview=(prototypeResponse)=>{
  return baseService.makeApiCall(URLS.addPrototypeReviewUrl, {}, 'POST', {prototype_response:prototypeResponse});
}

const getPrototypeResponse = reviewId => {
  return baseService.makeApiCall(URLS.getPrototypeResponse(reviewId));
}

export const prototypeReviewService={
  addPrototypeReview,
  getPrototypeResponse
}
