import { LOCAL_STORAGE_USER_KEY } from '../../constants/app';
import queryString from 'query-string';

const getUserData = () => {
    const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
    return user ? JSON.parse(user) : null;
};

export const addUrlParams = (url, paramDict) => {
    Object.keys(paramDict).forEach(key => {
        if (!paramDict[key]) {
            delete paramDict[key];
        }
    });
    return `${url}?${queryString.stringify(paramDict)}`;
};

export const updateFilterParams = (history, paramDict) => {
    const { location: { pathname } } = history;
    return history.push(addUrlParams(pathname, paramDict));
};

export const utils = { getUserData, updateFilterParams, addUrlParams }
