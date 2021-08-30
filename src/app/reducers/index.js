import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authenticationReducer from './loginReducer';
import resAuthenticationReducer from './resSignupReducer';
import userAuthenticationReducer from './userSignUpReducer';
import productReducer from './productReducer';
import questionnaireReducer from './questionnaireReducer';
import addPrototypeReducer from './addPrototypeReducer'
import loaderReducer from './loaderReducer';
import questionnaireReviewReducer from './questionnaireReviewReducer';
import prototypeReviewReducer from './prototypeReviewReducer'
import participantProductReducer from './participantProductReducer';
import participantReviewReducer from './participantReviewReducer';
import productReviewReducer from './productReview';
import commonReducer from './common';

export default (history) => combineReducers({
    router: connectRouter(history),
    authenticationReducer,
    resAuthenticationReducer,
    userAuthenticationReducer,
    productReducer,
    questionnaireReducer,
    addPrototypeReducer,
    loaderReducer,
    questionnaireReviewReducer,
    prototypeReviewReducer,
    participantProductReducer,
    participantReviewReducer,
    productReviewReducer,
    commonReducer
});
