import baseService from './base.service';
import URLS from '../../constants/api-urls';

/**
 * Service to make api call and login using given credentials.
 *
 * @param email: Email of user trying to log in
 * @param rawPassword: Password of user trying to log in
 */
function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    };

    return fetch(URLS.loginUrl, requestOptions)
        .then(baseService.handleResponse, baseService.handleError);
}

/**
 * Service to log user out and mark his token invalid.
 */
function logout() {
    return baseService.makeApiCall(URLS.logoutUrl);
}

export const authService = {
    login,
    logout,
};
