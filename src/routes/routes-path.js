export const baseUrls = {
  signUp: "/signUp/",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password",
  product: "/product",
  home: "/home",
  search: "/search",
  history: "/review-history"
};

const PATHS = {
  landingPage: "/",
  loginPage: "/login",
  participantRegisterPage: `${baseUrls.signUp}participant`,
  researcherRegisterPage: `${baseUrls.signUp}researcher`,
  forgotPassword: `${baseUrls.forgotPassword}`,
  createProduct: `${baseUrls.product}/create`,
  editProduct: `${baseUrls.product}/edit/`,
  listProduct: `${baseUrls.product}s`,
  listProductParticipant: `${baseUrls.home}`,
  previewQuestionnaire: `${baseUrls.product}/:productId/preview-questionnaire`,
  previewPrototype: `${baseUrls.product}/:productId/preview-prototype`,
  productReviewResponse: `${baseUrls.product}/review-response/`,
  reviewProduct: `${baseUrls.product}/review/`,
  searchProduct: `${baseUrls.search}`,
  reviewHistory: `${baseUrls.history}`,
  resumeReview:`${baseUrls.product}/resume-review/`,
  reviewedProducts: `${baseUrls.product}/reviewed`,
  surveyReview: `${baseUrls.product}/survey-review/`,
  prototypeReview: `${baseUrls.product}/prototype-review/`,
  reviewHistoryDetail:`${baseUrls.history}/details`,
};

export default PATHS;
