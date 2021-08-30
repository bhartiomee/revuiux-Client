import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import BaseLayout from '../BaseLayout';

const BaseRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => {
        return (
            <BaseLayout showProfile={false}>
                <Component {...props} />
            </BaseLayout>
        );
    }}
    />
);

BaseRoute.defaultProps = {
    location: {},
};

BaseRoute.propTypes = {
    component: PropTypes.func.isRequired,
    location: PropTypes.object,
};

export default BaseRoute;
