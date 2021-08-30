import { LOCAL_STORAGE_USER_KEY, UNAUTHORISED_STATE_CODES } from '../../constants/app';
import PATHS from '../../routes/routes-path';
import { utils } from '../utils/commonUtils';
import errorActions from '../actions/errors';
import isEmpty from 'lodash/isEmpty';
import { history, dispatchAction } from '../../store';

/**
 * Function to handle response returned by apis.
 *
 * @param response: Response object returned from api calls.
 */
const handleResponse = (response) => {
    return response.text().then((text) => {
        try {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                // const error = (data && (data.message || data.non_field_errors)) || response.statusText;
                const error = (data && data.data) || data || response.statusText;
                return Promise.reject(error);
            }
            return data;
        } catch (e) {
            return Promise.reject(response.statusText);
        }
    });
};

const handleError = (error) => {
    dispatchAction(errorActions.set500Error());
    throw error;
};

/**
 * Function to make api call with Authorization header.
 *
 * @param url: URL to which api call will be made
 * @param method: Method type for api call
 * @param data: Data which will be sent in call.
 * @param params: Query params to be passed with url
 */
const makeApiCall = (url, params = {}, method = 'GET', data, headers = null, options = {}) => {
    // const user = utils.getUserData();
    const user = utils.getUserData();
    let requestOptions = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (user) {
        requestOptions['headers']['Authorization'] = `Token ${user && user.token}`;
    }

    if (!isEmpty(headers)) {
        requestOptions.headers = { ...requestOptions.headers, ...headers };
        if (headers['Content-Type'] === '') {
            delete requestOptions.headers['Content-Type'];
        }
    }
    if (data) {
        requestOptions.body = JSON.stringify(data);
    }
    if (!isEmpty(options)) {
        requestOptions = { ...requestOptions, ...options };
    }
    url = new URL(url);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    return fetch(url, requestOptions).then(
        response => {
            if (response.status === 404) {
                dispatchAction(errorActions.setPageNotFoundError());
            }
            if (response.status >= 500) {
                dispatchAction(errorActions.set500Error());
            }

            if (UNAUTHORISED_STATE_CODES.indexOf(response.status) > -1) {
                localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
                history.push(PATHS.loginPage);
            }
            return handleResponse(response);
        },
        handleError
    );
};

const baseService = {
    handleResponse,
    makeApiCall,
    handleError,
};

export default baseService;
