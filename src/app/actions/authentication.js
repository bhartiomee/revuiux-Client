import { push } from 'connected-react-router';

import actionTypes from '../../constants/action-types';
import { authService } from '../services/auth.service';
import PATHS from '../../routes/routes-path';
import { LOCAL_STORAGE_USER_KEY } from '../../constants/app';
import { isEmail } from '../utils/validators'
import errorMessages from '../../constants/messages'

/**
 * Set isAuthenticating True in case of request
 */
const loginRequest = () => ({ type: actionTypes.auth.LOGIN_REQUEST });

/**
 * Set the user data as well isAuthenticating False
 * @param user: user data
 */
const loginSuccess = user => ({ type: actionTypes.auth.LOGIN_SUCCESS, user });

/**
 * Set the error in case of auth failiure
 * @param error: error
 */
const loginFailure = error => ({ type: actionTypes.auth.LOGIN_FAILURE, error });

/**
 * clear the user data and error
 */
const clearUser = () => ({ type: actionTypes.auth.CLEAR_USER });

/**
 * Action to make api call and get user info using login credentials.
 *
 * @param email Email of user trying to log in
 * @param password Password of user trying to log in
 * @param next url to redirect after login
 */
const checkAuthentication = (email, password, next) => (dispatch) => {
    dispatch(loginRequest());
    authService.login(email, password)
        .then(
            (user) => {
                dispatch(loginSuccess(user));
                localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
                if(user.potential_user_type === 1){
                    dispatch(push(next || PATHS.listProductParticipant));
                }else{
                    dispatch(push(next || PATHS.listProduct));
                }
            },
            (error) => {
                dispatch(loginFailure(error && error.message));
            },
        );
};

/**
 * Action to validate given email is proper email or not.
 *
 * @param email Email of user trying to log in
 */
const validateEmail = email => (dispatch) => {
    if (!isEmail(email)) {
        dispatch(loginFailure(errorMessages.INVALID_EMAIL));
    } else {
        dispatch(loginFailure(''));
    }
};

/**
 * Action to logout user and clear user data
 */
const logout = () => (dispatch) => {
    authService.logout();
    localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
    dispatch(clearUser());
    dispatch(push(PATHS.loginPage));
};

const authActions = {
    logout,
    checkAuthentication,
    validateEmail,
    clearUser,
    loginFailure,
    loginRequest,
    loginSuccess,
};

export default authActions;
