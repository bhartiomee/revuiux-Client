import baseService from "./base.service";
import URLS from "../../constants/api-urls";

//service to post questionnaire reviews from participant
const addQuestionnaireReview=([...qstnResponse])=>{
  return baseService.makeApiCall(URLS.addQuestionnaireReviewUrl,{},'POST',{question_response:qstnResponse})
}

const getQuestionnaireReviewDetails = reviewId => {
  return baseService.makeApiCall(URLS.getQuestionnaireReviewDetails(reviewId));
}

export const questionnaireReviewService={
  addQuestionnaireReview,
  getQuestionnaireReviewDetails
}
