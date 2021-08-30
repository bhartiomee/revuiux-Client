import React from 'react';

import PropTypes from 'prop-types';

import { TransverseLoading } from 'react-loadingg';
import './Loader.css'

const LoaderWrapper = (props) => {
    const { showLoader, children } = props;
    return (
        <>
            {
                showLoader && (
                    <div className="loaderPageOuterWrapper">
                        <TransverseLoading />
                    </div>
                )
            }
            {!showLoader && children}
        </>
    );
};
LoaderWrapper.defaultProps = {
    showLoader: false,
};

LoaderWrapper.propTypes = {
    showLoader: PropTypes.bool,
    children: PropTypes.any.isRequired,
};

export default LoaderWrapper;
