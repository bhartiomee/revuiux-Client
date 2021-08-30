import baseService from './base.service';
import URLS from '../../constants/api-urls';

 const getResearcherProductReviewList = isReviewed => {
    return baseService.makeApiCall(URLS.researcherProductReviewListUrl, { is_reviewed: isReviewed})
        .then(productList => productList);
}

const getProductReviewResponse = productId => {
    return baseService.makeApiCall(URLS.productReviewResponse(productId))
        .then(reviewResponse => reviewResponse);
}

const updateReviewedStatus=reviewId=>{
    return baseService.makeApiCall(URLS.updateReviewedStatus(reviewId),{},'PUT')
}

export const productReviewService = {
    getResearcherProductReviewList,
    getProductReviewResponse,
    updateReviewedStatus
}
