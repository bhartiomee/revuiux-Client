import React from 'react';
import queryString from 'query-string';

export function withParams(WrappedComponent) {
    const _WrappedComponent = props => {
            const { location } = props;
            const parsed = queryString.parse(location.search);

            // Wraps the input component in a container, without mutating it. Good!
            return (
                <WrappedComponent
                    {...props}
                    {...parsed}
                />
            );
    }
    _WrappedComponent.propTypes = WrappedComponent.propTypes;

    return _WrappedComponent;
}
