import { push } from 'connected-react-router';

import actionTypes from '../../constants/action-types';
import PATHS from '../../routes/routes-path';
import { isEmail } from '../utils/validators'
import errorMessages from '../../constants/messages'
import { researcherauthService } from '../services/resAuth.service';
import { Input } from '@material-ui/core';

/**
 * Set isAuthenticating True in case of request
 */
const resSignupRequest = () => ({ type: actionTypes.auth.SIGNUP_REQUEST });

/**
 * Set the user data as well isAuthenticating False
 * @param user: user data
 */
const resSignUpSuccess = () => ({ type: actionTypes.auth.SIGNUP_SUCCESS });

/**
 * Set the error in case of auth failiure
 * @param error: error
 */
const resSignupFailure = error => ({ type: actionTypes.auth.SIGNUP_FAILURE, error });

/**
 * Action to make api call and get user info using signup credentials.
 * @param next url to redirect after signup
 */
const reseacherSignup = (input, next) => (dispatch) => {
    dispatch(resSignupRequest());
    researcherauthService.researcherRegister(input)
        .then(
            () => {
                dispatch(resSignUpSuccess());
                dispatch(push(next || PATHS.loginPage));
            },
            (error) => {
                dispatch(resSignupFailure(error && error.message));
            },
        );
};

/**
 * Action to validate given email is proper email or not.
 *
 * @param email Email of user trying to sign in
 */
const validateEmail = email => (dispatch) => {
    if (!isEmail(email)) {
        dispatch(resSignupFailure(errorMessages.INVALID_EMAIL));
    } else {
        dispatch(resSignupFailure(''));
    }
};

const resAuthActions = {
    reseacherSignup,
    validateEmail,
    resSignupRequest,
    resSignupFailure,
    resSignUpSuccess
};

export default resAuthActions;
