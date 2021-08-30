import React from 'react';

import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import BaseLayout from '../../components/BaseLayout';
import errorActions from '../../actions/errors';

class ErrorPage extends React.Component {
    componentDidMount() {
        const { setPageNotFoundError } = this.props;
        setPageNotFoundError();
    }

    render() {
        return (
            <BaseLayout />
        );
    }
}

ErrorPage.defaultProps = {
};

ErrorPage.propTypes = {
    setPageNotFoundError: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    setPageNotFoundError: () => {
        dispatch(errorActions.setPageNotFoundError());
    },
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(ErrorPage));
