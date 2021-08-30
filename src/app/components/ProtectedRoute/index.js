import React from 'react';
import PropTypes from 'prop-types';

import PATHS from '../../../routes/routes-path';
import { LOCAL_STORAGE_USER_KEY } from '../../../constants/app';

import { Route, Redirect } from 'react-router';
import BaseLayout from '../BaseLayout';

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => {
        const isAuthenticated = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
        const { location: { pathname, search } } = props;
        return (
            isAuthenticated
                ? <BaseLayout showProfile={true}> <Component {...props} /> </BaseLayout>
                : <Redirect to={{ pathname: PATHS.loginPage, search: `?next=${pathname}${search}` }} />
        );
    }}
    />
);

ProtectedRoute.defaultProps = {
    location: {},
};

ProtectedRoute.propTypes = {
    component: PropTypes.func.isRequired,
    location: PropTypes.object,
};

export default ProtectedRoute;
