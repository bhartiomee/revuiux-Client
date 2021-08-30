const { REACT_APP_API_ROOT } = process.env;
const ACCOUNTS_BASE_URL = `${REACT_APP_API_ROOT}/accounts`;
const PROTOTYPE_BASE_URL = `${REACT_APP_API_ROOT}/prototypes`
const PRODUCT_BASE_URL = `${REACT_APP_API_ROOT}/products`
const QUESTIONNAIRE_BASE_URL = `${REACT_APP_API_ROOT}/questionnaires`
const QUESTIONNAIRE_RESPONSE_BASE_URL = `${REACT_APP_API_ROOT}/questionnaire-response`
const PRODUCT_REVIEW_URL = `${REACT_APP_API_ROOT}/productreview`
const PROTOTYPE_RESP_BASE_URL = `${REACT_APP_API_ROOT}/prototype-response/`
const PRODUCT_REVIEW_BASE_URL = `${REACT_APP_API_ROOT}/productreview`

const URLS = {
    participantSignUpUrl: `${ACCOUNTS_BASE_URL}/signup/participant/`,
    researcherSignUpUrl: `${ACCOUNTS_BASE_URL}/signup/researcher/`,
    loginUrl: `${ACCOUNTS_BASE_URL}/login/`,
    logoutUrl: `${ACCOUNTS_BASE_URL}/`,
    productListUrl: `${PRODUCT_BASE_URL}/list/`,
    productDetailUrl: productId => `${PRODUCT_BASE_URL}/detail/${productId}/`,
    productUpdateUrl: productId => `${PRODUCT_BASE_URL}/update/${productId}/`,
    productCreateUrl: `${PRODUCT_BASE_URL}/add/`,
    questionnaireCreateUrl: `${QUESTIONNAIRE_BASE_URL}/addquestions/`,
    questionnaireDetailsUrl: productId => `${QUESTIONNAIRE_BASE_URL}/get-questions/${productId}/`,
    addPrototype: `${PROTOTYPE_BASE_URL}/add/`,
    prototypeDetailUrl: productId => `${PROTOTYPE_BASE_URL}/detail/${productId}/`,
    addQuestionnaireReviewUrl: `${QUESTIONNAIRE_RESPONSE_BASE_URL}/add-question-response/`,
    addReview: productId => `${PRODUCT_REVIEW_URL}/add-product-review/${productId}`,
    addPrototypeReviewUrl:`${PROTOTYPE_RESP_BASE_URL}/add-prototype-response`,
    researcherProductReviewListUrl: `${PRODUCT_REVIEW_BASE_URL}/researcher-review-list/`,
    productReviewResponse: productId => `${PRODUCT_REVIEW_BASE_URL}/product-review-response/${productId}`,
    getQuestionnaireReviewDetails: reviewId => `${QUESTIONNAIRE_RESPONSE_BASE_URL}/get-question-response/${reviewId}`,
    getPrototypeResponse: reviewId => `${PROTOTYPE_RESP_BASE_URL}/get-prototype-response/${reviewId}`,
    getProductReviewList: `${PRODUCT_REVIEW_BASE_URL}/product-review-list/`,
    updateReviewedStatus:reviewId=>`${PRODUCT_REVIEW_BASE_URL}/update/${reviewId}`,
}

export default URLS;
